const express = require('express');
const path = require('path');

const booksRoutes = require('./routes/books.routes');

const app = express();
const PORT = 3000;

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount routes (final endpoints become /api/books and /api/books/:id)
app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});