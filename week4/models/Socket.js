const mongoose = require('mongoose');

const socketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    address: { type: String, required: true },
    suburb: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: String, required: true }
  },
  type: {
    type: String,
    enum: ['Standard', 'Fast Charge', 'USB', 'Industrial'],
    required: true
  },
  powerOutput: {
    type: Number, // in watts
    required: true
  },
  isIndoor: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['Available', 'Occupied', 'Out of Order'],
    default: 'Available'
  },
  reportedBy: {
    type: String,
    default: 'Anonymous'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Socket', socketSchema);