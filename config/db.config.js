const mongoose = require('mongoose');

 const mongodbConnection = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error)=>{
        console.log("Error connecting to MongoDB",error);
    })
 }

 module.exports={
    mongodbConnection
 }