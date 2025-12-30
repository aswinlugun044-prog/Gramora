const mongoose=require('mongoose');

async function connectMongo() {

    try{
       await mongoose.connect("mongodb+srv://<gramora>:<IrA2B4djH13lLx82>@cluster0.pp5azx6.mongodb.net/krishisetu?appName=Cluster0"),{

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