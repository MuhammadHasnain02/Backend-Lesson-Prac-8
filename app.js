import express from "express";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";

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

// -------------- Get All Users ----------------

app.get('/users' , async (req , res) => {

  const user = await User.find()
  res.send(user)

})

// -------------- Get User By Id ----------------

app.get('/users/:id' , async (req , res) => {

  const user_id = req.params.id
  const user = await User.find({ _id: user_id })
  if ( user.length === 0 ) res.send('User Not Found')
  else res.send(user)

})

// -------------- Add User ----------------

app.post('/add' , async (req , res) => {
  const user = await User.create(req.body)
  res.send(user)
})

// -------------- Update User ----------------

app.put("/update/:id", async (req, res) => {

  const user_id = req.params.id
  const data = req.body;

  const user = await User.findByIdAndUpdate(user_id , data , { new: true })
  res.send(user)

});

// -------------- Delete User ----------------

app.delete("/delete/:id", async (req, res) => {

  const user_id = req.params.id
  await User.findByIdAndDelete(user_id)
  res.send("User Deleted!");

});

// -------------- Server Listen ----------------

app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});

// ---------------------------------------------------------

// -------------- User Schema ----------------

// const UserSchema = new mongoose.Schema(
//   {
//     name: String,
//     age: Number,
//     gender: String,
//   },
//   {
//     collection: "active_users"
//   }
// );

// -------------- Define Model ----------------

// const User = mongoose.model("User" , UserSchema)




// ---------------------------------------------------------

// import express from "express";
// import mongoose from "mongoose";

// const app = express();
// const port = 3000;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/active")
//   .then(() => {
//     console.log("DB connected!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const UserSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   gender: String,
// });

// const User = mongoose.model("User" , UserSchema)

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get('/users' , async (req , res) => {
//   const users = await User.find()
//   res.send(users)
//   // res.send('users')
// })

// app.get('/getbyid' , async (req , res) => {
//   const users = await User.find({ _id: '697f303ac7a3dd39f4d9a03e' })
//   res.send(users)
// })

// app.get('/post' , async (req , res) =>{
//   // const newUser = req.body
//   const user = await User.create({
//     name: "Ahmed",
//     age: 20,
//     gender: "Male",
//   })

//   res.send(user)
// })

// app.get("/update", async (req, res) => {
//   const updatedData = await User.findOneAndUpdate(
//     { name: 'Ali' },
//     { name: 'Zubair' },
//     { new: true }
//   )

//   res.send(updatedData)
// });

// app.get("/delete", async (req, res) => {
//   const updatedData = await User.findOneAndDelete({ name: 'Zubair' }) 

//   res.send(updatedData)
// });


// app.listen(port, (req, res) => {
//   console.log(`Server Running On ${port}`);
// });
