const express=require("express")
const DbConnection=require("./src/db/dbConnection");
const RegisterUser = require("./src/controllers/users/register.user");
const LoginUser = require("./src/controllers/users/login.user");
const UserAuthantication = require("./src/controllers/users/validate.token");
const CreateCategory = require("./src/controllers/category/create.category");
const EditCategory = require("./src/controllers/category/edit.category");
const AddProduct = require("./src/controllers/product/add.product");
const EditProduct = require("./src/controllers/product/edit.product");
const ListProduct = require("./src/controllers/product/list.product");
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
// product
app.post("/product/add",AddProduct)
app.put("/product/edit",EditProduct)
app.get("/product/list",ListProduct)


// server run

const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log("server run on port",port)
})
