const mongoose = require('mongoose');
const Book = require('../models/bookModel');

const sampleData = [
    { id: 'b1', title: 'The Three-Body Problem', author: 'Liu Cixin', year: 2008, genre: 'Science Fiction', summary: "The Three-Body Problem is the first novel...", price: "29.99" },
    { id: 'b2', title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847, genre: 'Classic', summary: "An orphaned governess...", price: "22.00" },
    { id: 'b3', title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Classic', summary: "Elizabeth Bennet and Mr. Darcy...", price: "22.00" },
    { id: 'b4', title: 'The English Patient', author: 'Michael Ondaatje', year: 1992, genre: 'Historical Fiction', summary: "In a ruined Italian villa...", price: "25.39" },
    { id: 'b5', title: 'Small Gods', author: 'Terry Pratchett', year: 1992, genre: 'Fantasy', summary: "In Omnia, the god Om returns...", price: "31.99" }
];

async function seed() {
    try {
        await mongoose.connect('mongodb://localhost:27017/booksDB');
        await Book.deleteMany({}); // Clear existing
        await Book.insertMany(sampleData);
        console.log("Database seeded successfully!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();