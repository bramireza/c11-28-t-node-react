const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  medicId: {
    type: Schema.Types.ObjectId,
    ref: "Medic",
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("Appointment", appointmentSchema);
