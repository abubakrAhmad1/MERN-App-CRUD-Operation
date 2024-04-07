//in order to run this file we have to go to package.json present in this folder and inside the "scripts"
// write =>     "start":"node server.js",   "dev":"nodemon server.js",
//RUN: write "npm run dev" in terminal of this file
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json()); // Parse JSON bodies IMPORTANT

// CORS stands for Cross-Origin Resource Sharing
// This is crucial when your client-side code, which might be hosted on a different domain or port, needs to communicate with your Express server.
//enabling your Express application to respond to requests from different origins (domains) without encountering the typical browser restrictions that would block such requests
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

const route = require("./routes/userRoutes");

mongoose.connect(process.env.URI).then(() => {
  console.log("connection to database is successfull.........!!");
  app.listen(8000);
});

app.use(route);
