"use strict"
const Coupon=require("../../models/coupon")
 
const verifyCouponCode=async(req,res,next)=>{
    let {couponCode}=req.body
    let couponeExist= await Coupon.findOne({couponCode})
    if(!couponeExist){
  // create new coupon
  next();
    }
    else{
     return res.status(409).json({
          "message":`Coupon code ${couponCode} already exist`
      })
    }
}
const CreateCoupon=async(req,res)=>{

    try{
            const couponData=req.body;
            // check if coupon code already exist
            let useByDate=couponData.useByDate.split("-").reverse().join("-")
            console.log("usebyDate",useByDate)
            const newCoupon= new Coupon({...couponData,
                useByDate:  new Date(useByDate)})
               
        const couponResponse= await newCoupon.save()
        if(couponResponse){
        return res.status(201).json({
            "message":"Coupon created",
            "coupndata":couponResponse,
        })
        }
        
    }catch(error){
       return res.status(500).json({
            "message":"internal server error",
            "info":error.message
        })
    }
}

module.exports=[verifyCouponCode,CreateCoupon]