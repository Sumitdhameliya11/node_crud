const express = require('express');
const app = express();
const cors = require('cors');
const mongoDb = require('./config/db.config');
require('dotenv').config();
app.use(express.json());
app.use(cors());

//connection to mongoDB Database 
mongoDb.mongodbConnection();

app.get('/',(req,res)=>{
    res.write("server running....!");
})

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server running on  http://localhost:${process.env.PORT}`);
})