let mongoose=require('mongoose')
let schema=new mongoose.Schema({
    name:String,
    pass:String,
})
module.exports=schema