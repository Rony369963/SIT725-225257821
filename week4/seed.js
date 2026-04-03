require('dotenv').config();
const mongoose = require('mongoose');
const Socket = require('./models/Socket');

const sampleSockets = [
  {
    name: 'Deakin Library Level 2',
    location: {
      address: '221 Burwood Hwy',
      suburb: 'Burwood',
      state: 'VIC',
      postcode: '3125'
    },
    type: 'Standard',
    powerOutput: 2400,
    isIndoor: true,
    status: 'Available',
    reportedBy: 'admin'
  },
  {
    name: 'Burwood One Shopping Centre - Food Court',
    location: {
      address: '172 Burwood Hwy',
      suburb: 'Burwood',
      state: 'VIC',
      postcode: '3125'
    },
    type: 'USB',
    powerOutput: 18,
    isIndoor: true,
    status: 'Occupied',
    reportedBy: 'john_doe'
  },
  {
    name: 'Box Hill Central - Parking Level 1',
    location: {
      address: '1 Main St',
      suburb: 'Box Hill',
      state: 'VIC',
      postcode: '3128'
    },
    type: 'Fast Charge',
    powerOutput: 22000,
    isIndoor: false,
    status: 'Available',
    reportedBy: 'ev_user_99'
  },
  {
    name: 'Camberwell Junction Cafe Strip',
    location: {
      address: '743 Burke Rd',
      suburb: 'Camberwell',
      state: 'VIC',
      postcode: '3124'
    },
    type: 'Standard',
    powerOutput: 2400,
    isIndoor: false,
    status: 'Out of Order',
    reportedBy: 'sarah_k'
  },
  {
    name: 'Hawthorn Train Station - Platform 2',
    location: {
      address: 'Burwood Rd',
      suburb: 'Hawthorn',
      state: 'VIC',
      postcode: '3122'
    },
    type: 'USB',
    powerOutput: 10,
    isIndoor: false,
    status: 'Available',
    reportedBy: 'commuter_01'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await Socket.deleteMany({});
    await Socket.insertMany(sampleSockets);
    console.log('Database seeded with 5 sample sockets.');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Seeding error:', err);
    mongoose.disconnect();
  });