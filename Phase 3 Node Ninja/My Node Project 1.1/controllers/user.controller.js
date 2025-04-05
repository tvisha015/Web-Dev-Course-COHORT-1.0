import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from 'nodemailer';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Controller
const registerUser = async (req, res) => {
    //get user data
    const {name,email,password} = req.body; //destructuring

    //validate data
    if(!name || !password || !email){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    if(password.length < 6){
        return res.status(400).json({
            success: false,
            message: "Password should be minimum 6 characters"
        })
    }
    // used try catch block as we have to deal with database
    try {
        //if exising user
        const existingUser = await User.findOne({ //"User" in db (structure)
            email
        });
        
        if(existingUser){
            return res.status(400).json({
                success: true,
                message: "User already exists"
            })
        }

        //user varification token
        const token = crypto.randomBytes(32).toString("hex");
        const tokenExpiry = Date.now() + 10 * 60 * 60 * 1000; // 1 hour

        //create user
        const user = await User.create({
            name,
            email,
            password,
            verificationToken: token,
            verificationTokenExpires: tokenExpiry
        })
        
        //if user not created
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not created!"
            })
        }

        const transporter = nodemailer.createTransport({  //vehicle for sending mail
            host: "sandbox.smtp.mailtrap.io",  // info of vehicle
            port: 2525,
            secure: false,
            auth: {
              user: "f676ef647703f6",
              pass: "ddc309277d5577",
            },
        });
        const verificationLink = `${process.env.BASE_URL}/api/verify/${token}`;

        const mailSent = await transporter.sendMail({
            from: "abc@gmail.com",
            to: email,
            subject: "Verify your account",
            text: "Click on the link to verify",
            html:`<b>${verificationLink}</b>`
        })

        console.log(`Verification email sent to %s `, mailSent.messageId);
        
        return res.status(200).json({
            success: true,
            message: "User created successfully and email sent!"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong on server side",
            error: error.message
        })
    }
}

const verifyUser = async (req,res) => {
    //1 token lenge (token url ya param ke form me aaya hoga)
    const {token} = req.params;

    //2 ab check karo ki token aaya bi he ki nahi
    if(!token){
        return res.status(400).json({
            success: false,
            message: "Token is required!"
        })
    }

    //3 check karo token database me kahan he
    const user = await User.findOne({verificationToken: token});

    //agar token nai mila to
    if(!user){
        return res.status(400).json({
            success: false,
            message: "Invalid token"
        })
    }
    // if 
    if (user.verificationTokenExpires < Date.now()) {
        return res.status(400).json({
            success: false,
            message: "Verification link expired"
        });
    }
    //now all checks are completed so...
    try {
        user.isVerified=true;
        user.verificationToken=null;
    
        await user.save();
    
        return res.status(200).json({
            success: true,
            message: "User verified"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error"
        })
    }
    
}

const userLogin = async (req, res) => {
    //get data
    const {email,password} = req.body;

    //validate
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "Please enter all fields"
        })
    }
    try {
        //check email in DB
        const user = await User.findOne({email:email});

        //if user nai mila
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        if(!user.isVerified){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        // ab user ne diya hua password db me store kiye hue password se match karenge
        // BUT BUT BUT!!! - In DB, we have hashed password and hased password ko original password se kese compare kare!?, aur hashed password ko plaintext means original me convert karna to impossible hai

        const match = await bcrypt.compare(password,user.password);

        //if password match nai hua to
        if(!match){
            return res.status(400).json({
                success: false,
                message: "Wrong Password"
            })
        }

        //login kardena hai
        const sessionToken = jwt.sign(
            {id:user._id, name:user.name}, 
            process.env.JWT_SECRET, 
            {expiresIn:"24h"}
        )
        console.log("1")
        //cookie (user ki info temporarity browser me store karne ke liye)
        const cookieOption = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        };
        console.log("2")
        res.cookie("token",sessionToken,cookieOption);

        console.log("3")
        res.status(200).json({
            success: true,
            message: "Session created successfully and logedin successfully!"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Problem in login"
        })
    }
}
export {registerUser,verifyUser,userLogin}