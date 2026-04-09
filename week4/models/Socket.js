const mongoose = require('mongoose');

const socketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    locationName: {
      type: String,
      required: true
    },
    suburb: {
      type: String,
      required: true
    },
    socketType: {
      type: String,
      required: true,
      enum: ['Standard', 'USB', 'Fast Charge', 'Industrial']
    },
    powerOutput: {
      type: Number,
      required: true
    },
    availability: {
      type: String,
      required: true,
      enum: ['Available', 'Occupied', 'Out of Order']
    },
    indoor: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Socket', socketSchema);