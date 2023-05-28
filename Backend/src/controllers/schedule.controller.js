const Schedule = require("../models/Schedule");

const store = async (req, res) => {
  try {
    const { daysOfWeek, appointmentDuration, startTime, endTime } = req.body;
    const newSchedule = new Schedule({
      daysOfWeek,
      appointmentDuration,
      startTime,
      endTime,
    });
    const saveNewSchedule = await newSchedule.save();

    return saveNewSchedule._id;
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
module.exports = { store };
