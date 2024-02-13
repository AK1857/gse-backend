"use strict"

const Coupon=require("../../models/coupon")
const User=require("../../models/user")

const ApplyCoupon= async(req,res)=>{
    try{

            let orderData=req.body
            let couponCode=req.body.couponCode
            let coupon=await Coupon.findOne({couponCode})

            // check coupon exist or not
            if(!coupon){
                return res.status(404).json({
                    "message":`Couon code ${couponCode} does not exist`,
                    
                })
            }
        
            // if coupon valid then process
                if(orderData.billAmount>=coupon.minimumBillAmount){
                        if(coupon.isExpaire){
                            return res.status(404).json({
                                "message":`Coupon code expired `,
                                
                            })
                        }

                    // logic for apply coupon
                    let availAmount=0;
                    if(coupon.discountType=="percentage"){
                        availAmount= (orderData.billAmount/100)*coupon.discount;
                        availAmount=Math.min(availAmount,coupon.maximumDiscountAmount)
                    }
                    else{
                        availAmount=coupon.discount
                    }
                
                req.body={...orderData, billAmount:orderData.billAmount-availAmount}

                return res.status(200).json({
                    "message":"Coupon applyed Successfully",
                    data:req.body
                })

                }else{

                    return res.status(200).json({
                        "message":`Coupe code ${couponCode} apply oney bill amount greater then ${coupon.minimumBillAmount}`
                    })
                }
               
            
    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports= ApplyCoupon;


// check is coupon code exit?
// check is coupon expiere
// check is bill amount is more then coupon minimum order amount
//