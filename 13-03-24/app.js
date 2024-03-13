const express = require("express");
const bodyParser = require("body-parser");
const addBooksRouter = require("./routes/add-books");
const booksRouter = require("./routes/books");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-book", addBooksRouter);
app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.send(`
    <h1>HOMEPAGE</h1>
    <a href="/books">View Books</a>
  `);
});

app.listen(3000);
