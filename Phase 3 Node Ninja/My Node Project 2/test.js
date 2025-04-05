import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3030;

connectDB();

app.get('/',(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Listing to port ${port}`);
})