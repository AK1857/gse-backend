const User=require("../../models/user")
const jwt=require("jsonwebtoken");
const LoginUser=async(req,res)=>{
    try{

        let loginData=req.body;
        console.log("loginData",loginData);
        let user= await User.findOne({"mobile":loginData.mobile})
        // user not founded
        if(!user){
            return res.status(404).json({
                "message":"User Not found with given mobile number",
                "data":loginData
            })
        }
        // user founded but given password not match
        if(user.password!=loginData.password){
            return res.status(401).json({
                "message":"Passwored does not match",
                "data":loginData
            })
        }
        else{

        // user match mobile and password genrate a jwt token and send along with 
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            "password":user.password
        }

        const token = jwt.sign(data, jwtSecretKey);
 
            return res.status(200).json({
                "message":"Login Successfully",
                "token":token
            
            })
        }
        //

       

    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=LoginUser;