const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed =
{
    authors: ["J.D. Salinger"],
    description: "A 16-year old American boy relates in his own words the experiences he goes through at school and after, and reveals with unusual candour the workings of his own mind.",
    image: "https://books.google.com/books/content?id=Bb91ngEACAAJ&printsec=frontcover&img=1&zoom=5",
    link: "https://books.google.com/books/about/The_Catcher_in_the_Rye.html?id=j--EMdEfmbkC",
    title: "The Catcher in the Rye",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });