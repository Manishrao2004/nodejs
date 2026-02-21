const express = require("express");
const app = express();
app.listen(8080);
app.use(express.json())

let users = [];

app.get("/", (req, res) => {
  res.send("hello world")
});

app.post("/signup",(req,res)=>{
    const user= req.body;
    users.push(user)
    res.send(users)
})

app.post("/login",(req,res)=>{
    const {email, password}= req.body;
    const found = users.find((user)=>
    user.email===email && user.password===password)
    if (found){
        res.send("Valid user")
    }
    else{
        res.send("Invalid user")
    }
})