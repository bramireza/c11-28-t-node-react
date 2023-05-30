const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Schedule = require("../models/Schedule");

const store = async (req, res) => {
  try {
    const data = req.body;
    const doctor = await Doctor.findById(data.doctor).populate("schedule");
    if (!doctor) {
      return res.status(404).json({
        ok: false,
        message: "El doctor no existe",
      });
    }
    const patient = await Patient.findById(data.patient);
    if (!patient) {
      return res.status(404).json({
        ok: false,
        message: "El paciente no existe",
      });
    }
    const date = new Date(data.appointmentDate);
    const availableAppointment = await Appointment.aggregate([
      // Matching appointments by the date
      {
        $match: {
          appointmentDate: {
            $gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            $lt: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate() + 1
            ),
          },
          doctor: doctor._id,
        },
      },
    ]);
    const schedule = doctor.schedule;
    //Dates are created dynamically using startTime and endTime values saved in Schedule model
    const startTime = new Date(`${date.toDateString()} ${schedule.startTime}`);
    const endTime = new Date(`${date.toDateString()} ${schedule.endTime}`);

    const appointmentDuration = schedule.appointmentDuration;
    const availableAppointmentSlots = Math.floor(
      (endTime - startTime) / (appointmentDuration * 60000)
    );

    if (availableAppointmentSlots > availableAppointment.length) {
      data.duration = doctor.schedule.appointmentDuration;
      const appointment = new Appointment(data);
      const saveAppointment = await appointment.save();
      return res.status(201).json({
        ok: true,
        appointment: saveAppointment,
      });
    } else {
      res.status(500).json({
        ok: false,
        message: "Error no hay turnos para es dia",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
const getAllMyAppointments = async (req, res) => {
  try {
    const user =
      (await Patient.findById(req.user._id)) ||
      (await Doctor.findById(req.user._id));
    const appointments = await Appointment.find({
      $or: [{ doctor: user._id }, { patient: user._id }],
    });
    return res.status(200).json({
      ok: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const appointments = await Appointment.find({ active: true });
    return res.status(200).json({
      ok: true,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
const getOne = async (req, res) => {
  try {
    const _id = req.params.id;
    const appointment = await Appointment.findOne({ _id });
    if (!appointment) {
      return res.status(404).json({
        ok: false,
        message: "La cita no existe",
      });
    }
    return res.status(200).json({
      ok: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const appointment = await Appointment.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    if (!appointment) {
      return res.status(404).json({
        ok: false,
        message: "La cita no existe",
      });
    }
    return res.status(200).json({
      ok: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const appointment = await Appointment.findByIdAndUpdate(
      { _id },
      {
        active: false,
      },
      {
        new: true,
      }
    );
    if (!appointment) {
      return res.status(404).json({
        ok: false,
        message: "La cita no existe",
      });
    }
    return res.status(200).json({
      ok: true,
      message: "Se eliminó exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
module.exports = {
  store,
  getAllMyAppointments,
  getAll,
  getOne,
  update,
  remove,
};
