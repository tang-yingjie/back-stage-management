let mongoose=require('mongoose')
let path=require('path')
class DB{
    constructor(dbName){
        this.url=`mongodb://127.0.0.1:27017/${dbName}`
    }
    connect(){
        if (DB.hasConnected) {
            return true
        }
        let p=new Promise((resolve,reject)=>{
            mongoose.connect(this.url,{useNewUrlParser:true},err=>{
                if(err){
                    reject(err)
                }else{
                    DB.hasConnected=true
                    resolve()
                }
            })
        })
        return p
    }
    fModule(moduleName){
        let mPath=path.join(__dirname,'schema',moduleName)
        let module=mongoose.model(moduleName,require(mPath))
        return module
    }
    async find(moduleName,query,callback){
        try{
            this.connect()
            this.fModule(moduleName).find(query,(err,result)=>{
                callback(result)
            })
        }catch(err){
            callback(err)
        }
    }
    async insert(moduleName,data,callback){
        try {
            await this.connect()
            this.fModule(moduleName).insertMany(data,(err,result)=>{
                callback(result)
            })
        } catch (err) {
            callback(err)
        }
    }
    async updata(moduleName,oldData,newData,callback){
        try {
            await this.connect()
            this.fModule(moduleName).updateOne(oldData,newData,(err,result)=>{
                callback(result)
            })
        } catch (err) {
            callback(err)
        }
    }
    async delete(moduleName,id,callback){
        try {
            await this.connect()
            this.fModule(moduleName).findByIdAndDelete(id,(err,result)=>{
                callback(result)
            })
        } catch (err) {
            callback(err)
        }
    }
    async findCount(moduleName,data,callback){
        try {
            await this.connect()
            this.fModule(moduleName).count(data,(err,result)=>{
                callback(result)
            })
        } catch (err) {
            callback(err)
        }
    }
    

}
DB.hasConnected=false
module.exports=DB