const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = 5000;
const app = express();

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes);

//http://localhost:5000/api/books
app.get("/api/books", (req, res) => {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: "1925" },
    { id: 2, title: "The Catcher in the Rye", author: "JD Salinger", year: "1951" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960" }
  ];

  res.json(books);
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
