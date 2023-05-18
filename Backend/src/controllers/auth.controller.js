const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { personalId, password } = req.body;

  try {
    if (!personalId || !password) {
      return res.status(400).json({
        ok: false,
        message: "Debe proporcionar un ID personal y una contraseña..",
      });
    }
    const patient = await Patient.findOne({ personalId });
    if (!patient) {
      return res.status(403).json({ message: "Credenciales Invalidas" });
    }

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Credenciales Invalidas" });
    }

    return res.status(200).json({
      ok: true,
      message: "Autenticacion correcta",
      user: patient,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};
const register = async (req, res) => {
  const data = req.body;
  try {
    if (!data.personalId || !data.password) {
      return res.status(400).json({
        ok: false,
        message: "Debe proporcionar un ID personal y una contraseña..",
      });
    }
    const foundUser = await Patient.findOne({ personalId: data.personalId });
    if (foundUser) {
      return res.status(400).json({
        ok: false,
        message: "PersonalId ya está registrado.",
      });
    }
    const newUser = new Patient({
      name: data.name,
      password: await encriptPass(data.password),
      email: data.email,
      personalId: data.personalId,
      phoneNumber: data.phoneNumber,
      birthDay: data.birthDay,
      gender: data.gender,
      address: data.address,
    });
    const savedNewUser = await newUser.save();

    return res.status(200).json({
      ok: true,
      message: "Registro Exitoso",
      user: savedNewUser,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Error del servidor",
      error,
    });
  }
};

module.exports = {
  login,
  register,
};
