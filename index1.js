const express= require("express")

const app = express()
app.get("/",(req,res)=>{
    res.json({
        "msg":"ok"
    })
})

app.get("/home",(req,res)=>{
    res.send("Hello world")
})
app.listen(3000,(req,res)=>{
    console.log("running on port 3000");
})                                                                                                                                                                                                                                                                                                                                                