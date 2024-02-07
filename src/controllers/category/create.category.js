"use strict";

const Category=require("../../models/category")

const CreateCategory= async(req,res)=>{
    try{
        let categoryData=req.body
        // check if same category name already exist or not
        let category= await Category.findOne({"categoryName":categoryData.categoryName})
        if(!category){
            // create new category
            let newCategory= new Category({
                ...categoryData
            })
            let response= await newCategory.save()
            if(!response){
                res.json({
                    "Message":"Getting error during create category"
                })
            }
            else{
                res.status(201).json({
                    "message":"Category Created Successfully"
                })
            }
        }
        else{
            res.status(409).json({
                "message":`Catgory name ${categoryData.categoryName} already existe`
            })
        }

    }catch(error){
        return res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=CreateCategory;