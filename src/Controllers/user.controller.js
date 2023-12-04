const {encryptPassword,matchPassword}=require('../helper/helper')
const {Op}=require('sequelize')
const jwt=require('jsonwebtoken');
const User=require('../Models/User.model');

//this method is used to insert a user
const Signin=async(req,res)=>{
   try {
      req.body.password=encryptPassword(req.body.password)
      let resp= await User.create(req.body);
      if(resp.id){
         return res.json({message:"the user was  registered succefully"});
      }
      return res.status(501).json({message:"the user wasn't registerd succefully"})
   } catch (e) {
      console.log(e)
      res.status(501).json(e.message);
   }
}

//this method is used to get all users
const getALL=async(req,res)=>{
     try {
         let data=await User.findAll();
         res.json(data)
     } catch (e) {
        res.status(501).send(e.message);
     }
}

//this method is used to get user by id
const getById=async(req,res)=>{
    try {
      let resp=await User.findAll({where:{
         id:req.params.id
      }})

      res.json(resp)
    } catch (e) {
      res.status(501).send(e.message);
    }
}


//this  method is used to update a user
const update=async(req,res)=>{
    try {
      let resp=await User.update(req.body,{
         where:{
            id:req.params.id
         }
      })
     
      if(resp>0){
        return res.json({message:"The user was updated succefully"})
      }

      return res.json({message:"The user wasn't updated succefully check if that user exists"});
    } catch (e) {
      res.status(501).send(e.message);
    }
}


//this method to delete a user 
const remove=async(req,res)=>{
   try {
      let resp=await User.destroy({
         where:{
            id:req.params.id
         }
      })

      res.json(resp);
   } catch (e) {
      res.status(501).send(e.message);
   }
}


const Signup=async (req,res)=>{
   try {
      const {email,phone,password}=req.body
      const result=await User.findOne({
         where:phone!=null?{phone}:{email}
      })
   
      if(matchPassword(password,result.password)){
          result.dataValues.token=jwt.sign({id:result.id},process.env.SECRETKEY)
          return res.json(result);
      }

      return res.status(404).send("check if the data match with a user")
   } catch (e) {
      console.log(e)
      res.status(501).send(e.message);
   }
}

module.exports={Signin,getALL,getById,update,remove,Signup}

