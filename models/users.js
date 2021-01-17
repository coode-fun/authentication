var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

var users=mongoose.model("user",userSchema);

module.exports=users;
