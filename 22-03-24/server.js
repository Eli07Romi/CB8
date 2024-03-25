require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/books");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione con il DB OK!"));

// API Routes

app.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const totalBooks = await Book.countDocuments({});
    const totalPages = Math.ceil(totalBooks / pageSize);

    const books = await Book.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      books,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });

  try {
    const newBook = await book.save();

    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({ message: "Book not found" });
    } else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;

      await book.save();
      res.status(201).json({ message: "Book updated successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// /NEW USER:
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { username: newUser.username },
      process.env.JWT_SECRET
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
