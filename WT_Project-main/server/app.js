require("dotenv").config();
const db = require('./db/conn');
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const dashRouter = require("./routes/dashRoutes");

const app = express();
const port = 8000;
console.log(port);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/dash", dashRouter);

app.listen(port, () => console.log(`Server started on port ::: ${port}`));
