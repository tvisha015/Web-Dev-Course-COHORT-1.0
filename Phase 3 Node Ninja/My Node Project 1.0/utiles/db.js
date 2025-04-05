import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const db = () => {mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to mongoDB!")
    })
    .catch(()=>{
        console.log("Error connecting to mongoDB!")
    });
}

export default db;
