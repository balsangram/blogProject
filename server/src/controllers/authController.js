const { json } = require("body-parser");
const User = require("../models/User.model");

const register = async (req, res) =>{
    try {
        const {name,username, email, password} = req.body;
        // console.log(req.body,"name");
        const isUSer =await User.findOne(username);
        const isEmail = await User.findOne(email);
        if(isUSer || isEmail){
            return res.status(200).json({message: "user already exist"});
        }
        const newUSer = new User({name,username,email,password})
        await newUSer.save();
        res.status(200).json({message:"successafully", userDetails : newUSer})
     } catch (error) {
         res.status(500).json({message:error})
     }
}

const login = async (req,res)=>{
    try {
        const{username, email, password} = req.body;
        if((!username || !email )&& !password){
            return res.status(404).json({message: "first provide require information"});
        }
       const userDetails = await User.findOne( username ? {username} : {email});
       if(userDetails.password !== password){
        return res.status(404).json({message: "password is invalid"});
       }
        console.log(userDetails, "userDetails" );
       res.status(200).json({message:"successafully"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const update = async (req,res)=>{
    try {
        const updateData = req.body;
        const userID = req.params.id;
        // console.log(userID," id");
        const isUser = await User.findById(userID);
        // console.log(isUser);
        if(!isUser){
            return req.status(404).json({message:"user not Found"})
        }
        const isUpdate = await User.findByIdAndUpdate(isUser,updateData);

        res.status(200).json({message:"user Updated sucessafully" , status: isUpdate});
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteUser = async (req,res)=>{
    try {
        const userID = req.params.id;
        // console.log(userID);
        const isuser = await User.findById(userID);
        console.log(isuser);
        if(!isuser){
            return res.status(404).json({message:"user not found"});
        }
        const isDeleted = await User.findByIdAndDelete(isuser);
        console.log(isDeleted);
        
        res.status(200).json({message:"user is deleted"})
        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const logout = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const refreshToken = async()=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {register,login, logout, refreshToken,update,deleteUser};