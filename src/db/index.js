import mongoose, { mongo } from "mongoose";
import { db_name } from "../constants.js";
/*import express from "express"
const app = express()*/
const dataBaseConnect = async()=>{
    try {
        const interConnections = await mongoose.connect(`${process.env.DATA_URL}/${db_name}`)
        console.log("data base connected at : ",interConnections.connection.host);
        /*app.on("error",(error)=>{
            console.log("there's a error",error)
            process.exit(1);
        })
        app.get("/",(req,res)=>{
            res.send("hiii")
        })
        app.get("/su",(req,res)=>{
            res.send("hello subham")
        })
        app.listen(process.env.PORT,()=>{
            console.log(`connected at ${process.env.PORT}`)
        })*/
    } catch (error) {
        console.error("there's a error : ",error);
        process.exit(1)
    }
}
export default dataBaseConnect