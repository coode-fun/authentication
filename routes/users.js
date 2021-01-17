const express=require('express');
var router=express.Router();

var userRouter=require('../controllers/user.js');
var homeRouter=require('../controllers/home');

router.get('/login',userRouter.user_login);
router.get('/register',userRouter.user_signup);
router.get('/home',homeRouter.home);
router.get('/user_home',userRouter.home);
router.post('/create',userRouter.create);

module.exports=router;