import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type: String, required:true, unique:true},
    age: {type: Number}
},{timestamps:true})

const userModel = mongoose.model('Entry', userSchema)

export default userModel