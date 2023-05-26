const Doctor = require('../models/Doctor');

const converWeeklyScheduleToMonthCalendar = async (doctorId, year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month);

  const calendarData = [];
  const doctor = await Doctor.findById(doctorId);

  //Iterate through each day of the month
  for (let day = startDate; day < endDate; day++) {
    const dayOfWeek = day.getDay();

    if (
      doctor.schedule.find((schedule) =>
        schedule.daysOfWeek.includes(dayOfWeek)
      )
    ) {
      const availableAppointmentSlots =
        Math.floor(
          (endDate.getTime() - startDate.getTime()) /
            (doctor.schedule.appointmentDuration * 60000)
        ) - 1;

      calendarData.push({
        day: day,
        availableAppointmentSlots: availableAppointmentSlots,
      });
    }
  }

  return calendarData;
};

module.exports = converWeeklyScheduleToMonthCalendar;
