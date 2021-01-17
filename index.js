const cookieParser = require('cookie-parser');
const mongoose=require('mongoose');
var express=require('express');
var hbs=require('hbs');
var path=require('path');
var bodyParser=require('body-parser');
var usersRoute=require('./routes/users');
var app=express();

const url="mongodb://localhost:27017/Ninja_database";
mongoose.connect(url,(err)=>{
    if(err){
            console.log("Connection failed!!");
        }
    else
        console.log("Connection Established!!");
})

app.use(express.static('asserts'));
// app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'hbs');

app.use('/users',usersRoute);
app.get("/",(req,res)=>{
    res.render('home.hbs');
});

var port=process.env.port|3000;
app.listen(port,()=>{
    console.log(`Serving is running at ${port}`);
})