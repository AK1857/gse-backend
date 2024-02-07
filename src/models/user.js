const mongoose=require("mongoose");

const Schema=  mongoose.Schema;
const AddressSchecma=new Schema(
    {
        city:{type:String,requied:true},
        pincode:{type:Number,required:true},
        line1:{type:String,requied:true},
        line2:{type:String},
        type:{type:String,enum:["Home","Office","Other"],requied:true}
    }
)

const UserSchema= new Schema({
    name:{type:String,required:true,},
    mobile:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:[{ city:{type:String,requied:true},
                    pincode:{type:Number,required:true},
                    line1:{type:String,requied:true},
                    line2:{type:String},
                    type:{type:String,enum:["Home","Office","Other"],requied:true}
                }],
                requied:true,
                validate: [arrayLimit, 'At least one address is required']
            }
})
function arrayLimit(val) {
    return val.length > 0;
}

module.exports= mongoose.model("User",UserSchema)