require('dotenv').config();
const mongoose = require('mongoose');
const Socket = require('./models/Socket');

const socketData = [
  {
    title: 'Library Study Socket',
    locationName: 'Deakin Library Level 2',
    suburb: 'Burwood',
    socketType: 'Standard',
    powerOutput: 2400,
    availability: 'Available',
    indoor: true,
    notes: 'Good for study sessions and laptop charging.',
    image: 'images/lamborghini-temerario-8k-7680x4320-22617.jpg'
  },
  {
    title: 'Food Court Charging Spot',
    locationName: 'Burwood One Food Court',
    suburb: 'Burwood',
    socketType: 'USB',
    powerOutput: 20,
    availability: 'Occupied',
    indoor: true,
    notes: 'Busy during lunch hours.',
    image: 'images/koenigsegg-jesko-7680x4320-22606.jpg'
  },
  {
    title: 'Outdoor Fast Charge Point',
    locationName: 'Box Hill Parking Area',
    suburb: 'Box Hill',
    socketType: 'Fast Charge',
    powerOutput: 22000,
    availability: 'Available',
    indoor: false,
    notes: 'Best option for quick charging.',
    image: 'images/g-power-bmw-xm-7680x4320-23533.jpg'
  },
  {
    title: 'Cafe Wall Socket',
    locationName: 'Camberwell Café Strip',
    suburb: 'Camberwell',
    socketType: 'Standard',
    powerOutput: 1800,
    availability: 'Out of Order',
    indoor: false,
    notes: 'Reported faulty by multiple users.',
    image: 'images/toyota-gr-supra-a90-7680x4320-21985.jpg'
  },
  {
    title: 'Station Platform USB Port',
    locationName: 'Hawthorn Station Platform 2',
    suburb: 'Hawthorn',
    socketType: 'USB',
    powerOutput: 15,
    availability: 'Available',
    indoor: false,
    notes: 'Useful for short waiting times.',
    image: 'images/toyota-century-2025-5120x2880-24441.jpg'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB for seeding');
    await Socket.deleteMany({});
    await Socket.insertMany(socketData);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Seeding failed:', error.message);
    mongoose.connection.close();
  });