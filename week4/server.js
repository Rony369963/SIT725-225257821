require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const socketRoutes = require('./routes/socketRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/sockets', socketRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Locate a Socket API is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});