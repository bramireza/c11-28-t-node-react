const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  personalId: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\d{8}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid personal ID number. Must contain 8 digits.`,
    },
    required: true,
    unique: true,
  },
  cp: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  specialties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Specialty",
      required: true,
    },
  ],
  schedule: [
    {
      // Schedule model stores single day agenda, hence an array storing each active weekday individually
      type: Schema.Types.ObjectId,
      ref: "Schedule",
      required: true,
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
