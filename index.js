require('dotenv').config()
const express = require('express')
const app = express()
//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res)=>{
    res.send("hii i am pratim")
})
/*app.get('/parent',(req,res)=>{
    res.send("Nirmaleswar Dutta , Gouri Dutta")
})*/
app.get("/login",(req,res)=>{
    res.send("<h3>you are loged in</h3>")
})
app.listen(process.env.PORT, ()=> {
  console.log(`Example app listening on port ${process.env.PORT}`)
})