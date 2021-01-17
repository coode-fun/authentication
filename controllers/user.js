const mongoose=require('mongoose');
const users=require('../models/users');


module.exports.user_login=function (req,res){
    res.render('login.hbs');
}
module.exports.user_signup=function (req,res){
    res.render('register.hbs');
}
module.exports.home=function (req,res){
    res.render('home.hbs',{page:"User Home!!"});
}
module.exports.create=function(req,res){

    if(req.body.password!=req.body.re_password){
        return res.redirect('back');
    }
        

        console.log(req.body.email);
        users.find({email:req.body.email},(err,result)=>{
            console.log(result);
            if(result.length==0)
            {
                users.create(req.body,(err,result)=>{
                    if(err)
                    {
                        res.send("Error!!");
                    }
                    console.log(result);
                })
            }
           return res.redirect('./login');    
        });
}
module.exports.create_session=function(req,res){

}