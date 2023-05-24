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
const getOne = async (req, res) => {
  try {
    const _id = req.params.id;
    const doctor = await Doctor.findOne({ _id });
    if (!doctor) {
      return res.status(404).json({
        ok: false,
        message: "El doctor no existe",
      });
    }
    return res.status(200).json({
      ok: true,
      doctor,
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
const getAll = async (req, res) => {
  try {
    const doctors = await Doctor.find({ active: true });
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
const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const doctor = await Doctor.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    if (!doctor) {
      return res.status(404).json({
        ok: false,
        message: "El doctor no existe",
      });
    }
    return res.status(200).json({
      ok: true,
      doctor,
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
    const doctor = await Doctor.findByIdAndUpdate(
      { _id },
      { active: false },
      {
        new: true,
      }
    );
    if (!doctor) {
      return res.status(404).json({
        ok: false,
        message: "El doctor no existe",
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
module.exports = { store, getOne, getOneBySpecialty, getAll, update, remove };
