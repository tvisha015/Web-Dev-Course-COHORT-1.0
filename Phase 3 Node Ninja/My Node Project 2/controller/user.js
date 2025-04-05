import User from "../models/user.model.js";
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const registerUser = async (req,res) => {
    // get value
    const {email,username,password} = req.body; //destructure
    
    // validate the value 
    if(!email || !username || !password){
        return res.status(400).json({
            message : "All field required"
        });
    }
    if(password.length < 6){
        return res.status(400).json({
            message : "Enter password less than 6 characters"
        })
    }

    // if !exists ? create user : user already exists
    try{
        // check user in db
        const existingUser = await User.findOne({
            email 
        })

        if(existingUser){
            return res.status(400).json({
                message : "User exists"
    
            })
        }
        
        const user = await User.create({email,username,password})

        // generate token
        const token = crypto.randomBytes(16).toString("hex")
        
        // pass token to db
        user.verifytoken = token
        await user.save();

        // send to user
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
          });

        const info = await transporter.sendMail({
            from: process.env.SENDER_MAIL, // sender address
            to: user.email, // list of receivers
            subject: "User Verification", // Subject line
            text: "Click to verify user", // plain text body
            html: `<a href="${process.env.BASE_URL}/api/v1/users/verify/${token}"> <button> Click to verify </button></a>`, // html body
          });
          
        res.status(200).json({
            message : "User registered successfully"
        })
    }
    catch(err){
        return res.status(400).json({
            message : "Something is fishy"
        })
    }

}