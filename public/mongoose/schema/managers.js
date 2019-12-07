let mongoose=require('mongoose')
let schema=new mongoose.Schema({
    id: Number,
    name: String,
    sex: String,
    pass: String,
    type:Number
})
module.exports=schema