const express=require("express")
const DbConnection=require("./src/db/dbConnection")
require("dotenv").config();


// run DbConnection method to connect database
 let dbConnection=DbConnection();
 console.log(dbConnection)

const app=express();
app.get("/",(req,res)=>{

res.status(200).json({
    "message":"get data success"
})
})

// server run

const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log("server run on port",port)
})
