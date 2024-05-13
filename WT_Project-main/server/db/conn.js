require("dotenv").config();
const mongoose = require("mongoose");

const db = 'mongodb+srv://dhanrajshelke:VOVe3PSe9mjT2@cluster0.vvcx0bs.mongodb.net/';

mongoose
  .connect(db)
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Cannot connect to database"));
