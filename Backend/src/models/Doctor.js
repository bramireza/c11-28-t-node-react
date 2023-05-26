const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  specialties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Specialty',
      required: true,
    },
  ],
  schedule: {
    // Schedule model stores single week agenda
    type: Schema.Types.ObjectId,
    ref: 'Schedule',
    required: true,
  },

  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
