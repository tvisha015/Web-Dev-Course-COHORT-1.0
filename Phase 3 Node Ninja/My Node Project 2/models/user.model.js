import { Timestamp } from "bson";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
    
    email : {
        type : String,
        unique : true,
        lowercase : true
    },
    username : {
        type : String,
    },
    password : {
        type : String,
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verifytoken : String
},
{
    timestamps : true
})
const user = mongoose.model('User',userSchema)

export default user;