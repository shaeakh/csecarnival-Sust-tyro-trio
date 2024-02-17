const jwt = require('jsonwebtoken');
const User = require("../models/User");
// const JWT_KEY = process.env.JWT_KEY;

const userSignUp = async (req,res) =>{
    const {firstName,lastName,email,password,userClass} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists."});
        }
        const result = await User.create({firstName,lastName,email,password,userClass});
        // const token = jwt.sign({name:result.lastName, userClass: result.userClass},JWT_KEY);
        // res.status(201).json({user:result,token:token});
        res.status(201).json({user:result});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
    res.status(201).json({"message":"User Created Successfully!!!!"});
}

module.exports = userSignUp;