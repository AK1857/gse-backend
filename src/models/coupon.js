const mongoose=require("mongoose")
const {Objectid}=mongoose.Schema;

const CouponSchema= new mongoose.Schema({
    "couponCode":{type:String,required:true,uppercase:true, maxlength:32,unique:true},
    "title":{type:String, required:true},// show to user 
    "description":{type:String,required:true}, //details about counpon how this coupon applied
    "discountType":{type:String,required:true,enum:["flate","percentage"]},
    "discount":{type:Number,default:0, required:true}, // if discount type flate then direct apply or percentage then discount percentage
    "maximumDiscountAmount":{type:Number,required:true,default:0},
    "minimumBillAmount":{type:Number,default:0},
    "products":{type:[Objectid],ref:"Product"},
    "category":{type:[Objectid],ref:"Category"},
    "maximumTotalUsage":{type:Number,required:true},
    "isExpaire":{type:Boolean,default:false},
    "useByDate":{type:Date,required:true},
    "isCashback": { type: Boolean, default: false }, 


},{timestamps:true})

module.exports= mongoose.model("Coupon",CouponSchema)