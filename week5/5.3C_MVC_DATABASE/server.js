const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const booksRoutes = require('./routes/books.routes');

const app = express();
const PORT = 3000;

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/booksDB');
mongoose.connection.on('connected', () => console.log('✓ Connected to MongoDB'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/books', booksRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));