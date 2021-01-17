module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('id',22);
    res.render('home.hbs',{page:"Home!!"});
}