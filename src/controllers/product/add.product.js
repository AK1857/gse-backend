"use strict"
const Product=require("../../models/product")


const RequiredFiled=(req,res,next)=>{

    


}

const AddProduct=async(req,res)=>{
    try{

        let productData=req.body;
        // check if product name already exist

        let productExist= await Product.findOne({"name":productData.name})

        if(!productExist){
            let newProduct= new Product({...productData})
            let productResponse= await newProduct.save()
            if(!productResponse){
                res.status(200).json({
                    "message":"Error during crete product",
                    
                })
            }else{
                res.status(201).json({
                    "message":"Prduct created",
                    "response":productResponse
                })
            }
        }
        else{
            return res.status(409).json({
                "message":`product name ${productData.name} already exist`,
                "your data":productData
            })
        }


    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=AddProduct