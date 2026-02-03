import { User } from "../models/userModel.js";

const getAllUsers = async (req , res) => {

    const user = await User.find()
    res.send(user)

}

const getUserById = async (req , res) => {

    const user_id = req.params.id
    const user = await User.find({ _id: user_id })
    if ( user.length === 0 ) res.send('User Not Found')
    else res.send(user)

}

const createUser = async (req , res) => {

    const user = await User.create(req.body)
    res.send(user)

}

const updateUserById = async (req, res) => {

    const user_id = req.params.id
    const data = req.body;

    const user = await User.findByIdAndUpdate(user_id , data , { new: true })
    res.send(user)

}

const deleteUserById = async (req, res) => {

    const user_id = req.params.id
    await User.findByIdAndDelete(user_id)
    res.send("User Deleted!");

}

export { getAllUsers , getUserById , createUser , updateUserById , deleteUserById }
