const mongoose=require("mongoose")



const DbConnection=()=>{

    try{


const db_url=process.env.DB_URL;
mongoose.connect(db_url);

// if connected successfully
mongoose.connection.on("connected",()=>{
    console.log(" database connected successfully")
})

// if get error during db connection
mongoose.connection.on("error",(error)=>{
    console.log("Get error during connection to db",error)
})


    }
    catch(error){
        return {
            "Message":"error duging db connection",
            "info":error
        }
    }

}

module.exports=DbConnection;