import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utils/db.js';
import userRoute from './routes/user.routes.js';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(cors({ 
    origin : process.env.BASE_URL,
    methods : ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders : ['Content-Type','Authorizations'],
    credentials : true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
db();

app.get('/api/v1',(req,res)=>{
    res.send("Hello World!");
})

app.use("/api",userRoute); 

app.listen(port,()=>{
    console.log(`Listening to port : ${port}`);
})