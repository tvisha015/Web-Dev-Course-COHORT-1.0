import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './utiles/db.js';

//import all routes
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
db();

app.use(cors({
    origin : process.env.BASE_URL,
    methods : ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders : ['Content-Type','Authorizations'],
    credentials : true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use("/api/v1/users",userRoutes);

app.listen(port,()=>{
    console.log(`Listining to port ${port}`);
})