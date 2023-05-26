const Doctor = require('../models/Doctor');

const convertWeeklyScheduleToMonthCalendar = async (doctorId, year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const calendarData = [];
  const doctor = await Doctor.findById(doctorId).populate('schedule');

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  // method date.setDate() changes  the current date to the argument passed which shuld be an integer
  //method date.getDate() returns the current day of the month in local time
  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    const dayOfWeek = daysOfWeek[day.getDay()];

    const schedule = doctor.schedule.find((schedule) => {
      schedule.daysOfWeek.includes(dayOfWeek);
    });

    if (schedule) {
      //Dates are created dynamically using startTime and endTime values saved in Schedule model
      const startTime = new Date(`${day.toDateString} ${schedule.startTime}`);
      const endTime = new Date(`${day.toDateString()} ${schedule.endTime}`);

      const appointmentDuration = schedule.appointmentDuration;

      const availableAppointmentSlots = Math.floor(
        (endTime - startTime) / (appointmentDuration * 60000)
      );

      calendarData.push({
        day: day.getDate(),
        availableAppointmentSlots: availableAppointmentSlots,
      });
    }
  }

  return calendarData;
};

module.exports = convertWeeklyScheduleToMonthCalendar;
