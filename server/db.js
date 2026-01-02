const mongoose=require('mongoose');

async function connectMongo() {

    try{
       await mongoose.connect("mongodb+srv://gramora:eIid94yJbFqIP0iN@cluster0.fyvzwlp.mongodb.net/?appName=Cluster0"),{

            useNewUrlparser:true,
            useUnifiedTopology:true
        }
        console.log("connetd to mongodb");

    }catch(khatarnak){
        console.log(khatarnak);
        process.exit(1);
    }
    baraikasit13_db_user
}
module.exports=connectMongo;