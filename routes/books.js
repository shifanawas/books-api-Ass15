const express = require('express');
const router = express.Router();
const books = require('./bookData'); // Importing book data

// GET /books - return all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET /books/:id - return book by ID
router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;
