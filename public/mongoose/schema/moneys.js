let mongoose=require('mongoose')
let schema=new mongoose.Schema({
    date:String,
    people:String,
    reason:String,
    counts:Number,
    type:String
})
module.exports=schema