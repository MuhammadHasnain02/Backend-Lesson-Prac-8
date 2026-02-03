import mongoose from "mongoose";

// -------------- User Schema ----------------

const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
  },
  {
    collection: "active_users"
  }
);

// -------------- Define Model ----------------

export const User = mongoose.model("User" , UserSchema)