const express=require("express");
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser')
const route=require('./Route/route')
const middleware=require("./Middleware/midware")

app.use(middleware)
app.use(cors({origin:"*"}))
// app.use(express.json());
app.use(bodyParser.json())
app.use("/",route)
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(4042,()=>{
    console.log('port 4042 working');
})