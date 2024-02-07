const User = require("../../models/user")
const JWT=require("jsonwebtoken")
const bcrypt=require("bcrypt")
// meddleware for check moble number alread registed
const MobileNumberExist = async (req, res, next) => {
    try {
        let mobileNumber = req.body.mobile
        let user = await User.findOne({ mobile: mobileNumber })

        if (user) {
            return res.status(409).json({
                "message": `Mobile number ${mobileNumber} already exist`,
            })
        }
        else {
            next()
        }
    } catch (error) {
        return res.status(500).json({
            "message": "Internal server errror",
            "info": error.message
        })
    }
}

const RegisterUser = async (req, res) => {
    try {
        let userData = req.body;
       

        let newUser = new User({
            ...userData,
        })
        console.log("userData", newUser)
        let user = await newUser.save()
        if (!user) {
            return res.status(400).jsong({
                "message": "Error during registration "
            })
        }
        return res.status(201).json({
            "message": "User Registration Successfull",
            "userData": user
        })
    } catch (error) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "info": error.message
        })
    }
}

module.exports = [MobileNumberExist, RegisterUser]