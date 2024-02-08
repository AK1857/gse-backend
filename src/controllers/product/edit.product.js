"use strict"
const Product=require("../../models/product")


const EditProduct=async(req,res)=>{
    try{

        let productData=req.body;
        // check product id send by user or not

        if(!productData.productId){
            return res.status(400).json({
                "message":"ProductId requied"
            })
        }
        // check if product  exist or not


        let productExist= await Product.findOne({_id:productData.productId})
        if(!productExist){
            return res.status(404).json({
                "message":`product id ${productData.productId} does not  exist`,
                "your data":productData
            })
        }
        else{
            let productResponse= await Product.findOneAndUpdate({_id:productData.productId},{$set:{...productData}})
            if(!productResponse){
                res.status(200).json({
                    "message":"Error during crete product",   
                })
            }else{
                res.status(202).json({
                    "message":"Prduct updated successfully",
                    "response":productResponse
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=EditProduct