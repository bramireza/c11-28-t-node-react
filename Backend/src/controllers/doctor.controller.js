const Doctor = require("../models/Doctor");

const store = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    const saveDoctor = await doctor.save();

    return res.status(201).json({
      ok: true,
      doctor: saveDoctor,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};

const getOneBySpecialty = async (req, res) => {
  try {
    const { idSpecialty } = req.params;
    const doctors = await Doctor.find({ specialties: idSpecialty });
    return res.status(201).json({
      ok: true,
      doctors,
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
    const doctors = await Doctor.find();
    return res.status(200).json({
      ok: true,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
module.exports = { store, getOneBySpecialty, getAll };
