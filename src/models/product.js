"use strict"
const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    "name":{type:String,required:true, trim:true},
    "description":{type:String,required:true,},
    "productImage":{type:[{type:String}]},
    "featureImage":{type:String,required:true},
    "price":{type:Number,required:true,},
    "unit":{type:String,required:true},
    "discountPrice":{type:Number,},
    "category":{type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Category"},
    "isActive":{type:Boolean,default:true},
    "isOutOfStock":{type:Boolean,default:false}
    
    
},{timestamps:true})


module.exports=mongoose.model("Product",ProductSchema)


