const sessionstudies=require('../Models/Sessionstudies.model');


const add=async (req,res)=>{
  try {
      let resp=await sessionstudies.create(req.body);
      if(resp.id){
        return res.json({message:"the session study was created successfully"})
      } 
      return res.status(501).json({message:"the session study wasn't created successfully"})
  } catch (e) {
     res.status(501).send(e.message);
  }
}


const getALL=async (req,res)=>{
    try {
      let resp = await sessionstudies.findAll();
      res.json(resp);
    } catch (e) {
       res.status(501).send(e.message);
    }
}


const getByUser=async (req,res)=>{
    try {
        let resp=await sessionstudies.findAll({where:{
            usr:req.params.user
        }})

        res.json(resp);
    } catch (e) {
       res.status(501).send(e.message);
    }
}

const getById=async (req,res)=>{
    try {
      let resp=await sessionstudies.findAll({
        id:req.params.id
      })
      res.json(resp);
    } catch (e) {
       res.status(501).send(e.message);
    }
}

const update=async (req,res)=>{
    try {
       let resp=await sessionstudies.update(req.body,{
        where:{
            id:req.params.id
        }
       })

       if(resp>0){
        return res.json({message:"That session study was updated succefully"})
       }

       return res.status(501).json({message:"That session study wasn't updated succefully"})
    } catch (e) {
       res.status(501).send(e.message);
    }
}

const remove=async (req,res)=>{
    try {
      let resp=await sessionstudies.destroy({where:{id:req.params.id}})
      res.json(resp);
    } catch (e) {
       res.status(501).send(e.message);
    }
}


module.exports={add,getALL,getById,getByUser,update,remove}