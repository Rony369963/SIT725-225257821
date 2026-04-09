const Book = require('../models/bookModel');

const getAllBooks = async () => {
    return await Book.find({});
};

const getBookById = async (bookId) => {
    return await Book.findOne({ id: bookId });
};

module.exports = { getAllBooks, getBookById };