import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["User","Admin"],
        default: "User"
    },
    verificationToken: {
        type: String
    },
    verificationTokenExpires: {
        type: Date
    }
},{timestamps:true});

// password me changes ke time hume uske pehle kuch to karna hai (hooks)
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

const User = mongoose.model("User",userSchema);

export default User;