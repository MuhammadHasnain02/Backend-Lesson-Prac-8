import express from "express";
import mongoose from "mongoose";
// import { User } from "./models/userModel.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
const port = 3000;

app.use(express.json())

// -------------- Define Mongoose Server ----------------

mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// -------------- Home Page ----------------

app.get("/", (req, res) => {
  res.send("Home Page");
});

// -------------- User Routes ----------------

app.use( '/users' , userRoutes)

// -------------- About Page ----------------

app.get("/about", (req, res) => {
  res.send("About Page");
});

// -------------- Server Listen ----------------

app.listen( port, () => {
  console.log(`Server Running On Port: ${port}`);
} );
