import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

//import all routes
import userRoutes from "./routes/user.routes.js";  

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.use(cors({
    origin : process.env.BASE_URL,
    credentials : true,
    methods : ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders : ['ContentType','Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send("Hello World!");
})

app.get('/twitter',(req,res)=>{
    res.send("<h1>Redirected to twitter!");
})
//connect to db
db(); 

//user routes
app.use("/api/v1/users/",userRoutes);

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})