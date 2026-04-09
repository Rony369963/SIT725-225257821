const express = require('express');
const router = express.Router();

// Import controllers via controllers/index.js (same pattern as lecture)
const Controllers = require('../controllers');

// Final endpoints (because server mounts /api/books):
// GET /api/books
router.get('/', Controllers.booksController.getAllBooks);

// GET /api/books/:id
router.get('/:id', Controllers.booksController.getBookById);

module.exports = router;