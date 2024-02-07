
const jwt=require("jsonwebtoken")

const UserAuthantication=(req,res)=>{



       
        // Verification of JWT

    // Tokens are generally passed in header of request
    // Due to security reasons.
 
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = req.header(tokenHeaderKey);
    try {
    
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).json({
                "message":"auth fail",
                "token":token,
                "info":error.message
            });
        }
    } catch (error) {
        // Access Denied
        return res.status(401).json({
            "message":"aut fail",
            "token":token,
            "info":error.message
        });
    }


   
}

module.exports= UserAuthantication