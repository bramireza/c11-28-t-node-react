const { getAvailableAppointmentSlots } = require("../helpers/appointment");
const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

const convertWeeklyScheduleToMonthCalendar = async (doctor, year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const calendarData = [];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // method date.setDate() changes  the current date to the argument passed which shuld be an integer
  //method date.getDate() returns the current day of the month in local time
  for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
    if (day.getMonth() != month) {
      continue;
    }
    const dayOfWeek = daysOfWeek[day.getDay()];

    if (doctor.schedule.daysOfWeek.includes(dayOfWeek)) {
      const availableAppointmentSlots = await getAvailableAppointmentSlots(
        doctor,
        day
      );

      calendarData.push({
        day: day.getDate(),
        availableAppointmentSlots,
      });
    }
  }

  return calendarData;
};

module.exports = convertWeeklyScheduleToMonthCalendar;
