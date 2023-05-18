const Patient = require("../../models/Patient");
const encriptPass = require("../../utils/bcrypt");

const register = async (req, res) => {
  try {
    const data = req.body;
    if (!data.personalId || !data.password) {
      return res.status(400).json({
        ok: false,
        message: "You must provide an personalId and a password.",
      });
    }
    const foundUser = await Patient.findOne({ personalId: data.personalId });
    if (foundUser) {
      return res.status(400).json({
        ok: false,
        message: "PersonalId already in use.",
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
      message: "Register Succesfully",
      user: savedNewUser,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

module.exports = { register };
