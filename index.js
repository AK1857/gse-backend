const express=require("express")
const DbConnection=require("./src/db/dbConnection");
const RegisterUser = require("./src/controllers/users/register.user");
const LoginUser = require("./src/controllers/users/login.user");
const UserAuthantication = require("./src/controllers/users/validate.token");
const CreateCategory = require("./src/controllers/category/create.category");
const EditCategory = require("./src/controllers/category/edit.category");
require("dotenv").config();

// run DbConnection method to connect database
DbConnection();
 

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{

res.status(200).json({
    "message":"get data success"
})
})

app.post("/register",RegisterUser)
app.post("/login",LoginUser)
app.get("/user/authantication",UserAuthantication)
app.post("/category/create",CreateCategory)
app.put("/category/edit",EditCategory)


// server run

const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log("server run on port",port)
})
