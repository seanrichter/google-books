const express = require("express");
const mongoose = require("mongoose");
// SAVE THIS STEP UNTIL ROUTES
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Defining middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// SAVE THIS STEP UNTIL ROUTES
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser:true,useUnifiedTopology: true});


// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
