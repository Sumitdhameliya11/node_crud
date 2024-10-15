const  mongoose = require('mongoose');

const  itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})


const Item = mongoose.model('Items',itemSchema);

module.exports=Item;