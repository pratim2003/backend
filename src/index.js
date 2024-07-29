import dotenv from 'dotenv'
import dataBaseConnect from "./db/index.js";
dataBaseConnect();
dotenv.config({
    path : "./env"
})
/*
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.DATA_URL}/${db_name}`)
        app.on("error",(error)=>{
            console.log("there's a error")
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`website is open at ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error : ",error)
        throw error
    }
})()*/