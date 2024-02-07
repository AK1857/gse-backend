"use strict"
const mongoose=require("mongoose");

const CategorySchema=new mongoose.Schema({
    categoryName:{type:String,required:true,trim: true, unique:true }, 
    categoryIcon:{type:String,default:""},
})

module.exports= mongoose.model("Category",CategorySchema)