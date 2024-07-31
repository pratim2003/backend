import dotenv from 'dotenv'
import dataBaseConnect from "./db/index.js";
import { app } from './app.js';
dotenv.config({
    path : "./env"
})
dataBaseConnect()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`there an error at ${error}`)
    })
    app.get("/",(req,res)=>{
        res.send("hii i am pratim")
    })
    app.get("/git",(req,res)=>{
        res.send("<h2>hii this my github</h2>")
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is on at ${process.env.PORT}`)
    })
    
})
.catch((error)=>{
    console.log(`unable to connect database : ${error}`)
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