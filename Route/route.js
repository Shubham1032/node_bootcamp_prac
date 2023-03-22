const route=require('express').Router();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretkey="sharma"
let array=[];



route.get("/about",(req,res)=>{
    res.send("About page")
})
route.post("/signup/detail",async(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
const hashpassword=await bcrypt.hash(password,10);
let obj={
    name:name,
    password:hashpassword
}
array.push(obj)
res.send(array)
})
route.post("/login/detail",(req,res)=>{
    // res.send(req.body)
    const logindetail=req.body
    array.forEach(async(data)=>{
        const validate=await bcrypt.compare(req.body.password,data.password)
    if(!validate){
        res.send("Wrong password")
    }
    res.send("login done")
    })
    jwt.sign(logindetail,secretkey,(err,token)=>{
        if(err){
            res.send("Token not generated")
        }
        res.send(token)
    })
})
route.get("/api/verify",(req,res)=>{
    res.send("verified")
})

module.exports=route