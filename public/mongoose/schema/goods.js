let mongoose=require('mongoose')
let schema=new mongoose.Schema({
    date: String,
    name: String,
    inPrice: Number,
    units: String,
    outPrice: Number,
    counts: Number,
    type:String
})
module.exports=schema