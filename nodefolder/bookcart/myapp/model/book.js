var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var BookSchema=new Schema({
    BID:{type:String},BNAME:{type:String},AUTHER:{type:String},BPRICE:{type:String},BIMAGE:{type:String}
})
module.exports=mongoose.model("Book",BookSchema);