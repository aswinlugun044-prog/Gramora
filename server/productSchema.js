const mongoose=require('mongoose')

const proSchema=mongoose.Schema({
    productImage:String,
    productTitel:String,
    productPrice:String,
    productVedio:String,

module.exports=mongoose.model("adminlocals","proSchema")  
})