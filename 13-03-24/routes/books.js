const express = require("express");
const router = express.Router();

let books = [];

router.post("/", (req, res) => {
  const { title, author } = req.body;
  const newBook = { title, author };
  books.push(newBook);
  res.redirect("/books");
});

router.get("/", (req, res) => {
  let bookList = "<h1>Books Added</h1><ul>";
  books.forEach((book) => {
    bookList += `<li>${book.title} - ${book.author}</li>`;
  });
  bookList += "</ul>";
  bookList += `<a href="/add-book">Add New Book</a>`;
  bookList += `<br><a href="/">Back to Homepage</a>`;
  res.send(bookList);
});

module.exports = router;
