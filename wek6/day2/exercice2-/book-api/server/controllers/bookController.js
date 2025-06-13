let books = require('../models/bookModel');

// GET /api/books
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET /api/books/:bookId
const getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Livre introuvable' });
  }

  res.status(200).json(book);
};

// POST /api/books
const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};
