
// docker build -t <image_name> .     --->command to build image 
const express=require('express')
const port = process.env.PORT || 5000
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello from Docker NodeJS Application")
})
app.listen(port,()=>console.log(`APP is running at port ${port}`))

