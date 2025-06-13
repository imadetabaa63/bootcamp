const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook
} = require('../controllers/bookController');

router.get('/', getAllBooks);           // /api/books
router.get('/:bookId', getBookById);    // /api/books/:id
router.post('/', createBook);           // /api/books

module.exports = router;
