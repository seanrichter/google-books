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

//http://localhost:5000/api/customers
app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Robin", lastName: "Trower" },
    { id: 2, firstName: "Bill", lastName: "Withers" },
    { id: 3, firstName: "Roy", lastName: "Buchanan" }
  ];

  res.json(customers);
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
