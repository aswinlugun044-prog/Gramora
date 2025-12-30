const express= require("express");
const connectdb=require('./db.js');
const proSchema=require('./productSchema');
const cors=require('cors');
connectdb();



const app=express();
app.use(cors());
app.use(express.json());
app.get('/product',(req,res)=>{
  proSchema.find({})
  .than(cat={
    res.json(cat)

console.log(cat)
  })
})

app.get('/',(req,res)=>{
    res.send("hello Asit");
})
app.get('/api/movie',(req,res)=>{
res.json({"movie_name":"Baaghi","thumbnail":"https://youtu.be/Ri8qxEcMetE?si=H53IBERH8LYFb9_T"
    })
})
tree=()=>{
    console.log("port is testing");
}

const port=5000;
app.listen(port,tree);