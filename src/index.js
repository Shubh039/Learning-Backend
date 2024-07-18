//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/* ONE OF THE WAY TO CONNECT TO DB
import express from "express"
const app = express()
(async () => {
    try{
        await mongoose.connect(`${process.env.MONOGDB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{ // a method used to catch errors while app launch 
            console.log("ERROR :" , error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("Error: ",error)
        throw err
    }
})() // a javascript concept
*/