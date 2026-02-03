import express from "express";

export const userRoutes = express.Router();

userRoutes.get("/home", (req, res) => {

    res.send("Home Page");

});

userRoutes.get("/about", (req, res) => {

    res.send("About Page");

});

userRoutes.get("/contact", (req, res) => {

    res.send("Contact Page");

});
