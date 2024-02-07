"use strict"
const Category=require("../../models/category");


const EditCategory=async (req,res)=>{

    try{
        
        let categoryDetails=req.body;

        // check if category id exist or not

        let category= await Category.findOne({_id:categoryDetails.categoryId})
        if(!category){
            return res.status(404).json({
                "message":` Category id ${categoryDetails.categoryId} is not existe `
            })
        }
        else{
            // update category

                let categoryResponse= await Category.findOneAndUpdate({_id:categoryDetails.categoryId},{$set:{...categoryDetails}})
                if(!categoryResponse){
                    return res.status(200).json({
                        "message":" Unable to update category"
                    })
                }
                else{
                    return res.status(200).json({
                        "message":"Category update successfully",
                        "categoryResponse":categoryResponse
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

module.exports=EditCategory