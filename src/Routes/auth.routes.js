const {Router}=require('express');
const router=Router();
const {Signup,Signin}=require('../Controllers/user.controller')

router.post('/Signup',Signup);
router.post('/Signin',Signin)

module.exports=router;