import express from "express";
// import { User } from "../models/userModel.js";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userControllers.js";

export const userRoutes = express.Router();

// -------------- Get All Users ----------------

userRoutes.get('/' , getAllUsers)

// -------------- Get User By Id ----------------

userRoutes.get('/:id' , getUserById)

// -------------- Add User ----------------

userRoutes.post('/add' , createUser)

// -------------- Update User ----------------

userRoutes.put("/update/:id", updateUserById);

// -------------- Delete User ----------------

userRoutes.delete("/delete/:id", deleteUserById);
