"use strict"
const Product=require("../../models/product")

const ListProduct=async(req,res)=>{
    try{

        let productData=req.body;
        // check if product name already exist

        let productList= await Product.find({})
       res.status(200).json({
        "message":"get product produt list successfully",
        "productLit":productList
       })

    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=ListProduct