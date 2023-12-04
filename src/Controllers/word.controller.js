const Word=require('../Models/Word.model');


const getALL=async(req,res)=>{
    try {
      let resp=await Word.findAll()
      res.json(resp)        
    } catch (e) {
        res.status(501).send(e.message);
    }
}


const  getById=async(req,res)=>{
    try {
        let resp=await Word.findAll({where:{
            id:req.params.id
        }})
       
        res.json(resp)
    } catch (e) {
        res.status(501).send(e.message);
    }
}


const getByUser=async(req,res)=>{
    try {
        let resp=await Word.findAll({where:{
            usr:req.params.id
        }})
        res.json(resp);
        
    } catch (e) {
        res.status(501).send(e.message);
    }
}


const add=async(req,res)=>{
    try {
        console.log(req.body)
        let resp=await Word.create(req.body);

        if(resp.id){
            return res.json({message:"that word was registered successfully"})
        }
        return res.status(500).json({message:"that word wasn't registered successfully"})
    } catch (e) {
        console.log(e)
        res.status(501).send(e.message);
    }
}


const update=async(req,res)=>{
    try {
        let resp=await Word.update(req.body,{where:{
            id:req.params.id
        }})

       if(resp>0){
          return res.json({message:"that word was updated successfully"})
       }
       return res.status(500).json({message:"that word wasn't updated successfully"})
        
    } catch (e) {
        res.status(501).send(e.message);
    }
}



const remove=async(req,res)=>{
    try {
       let resp=await Word.destroy({where:{id:req.params.id}})
       res.json(resp);
    } catch (e) {
        res.status(501).send(e.message);
    }
}



module.exports={getALL,getById,getByUser,add,update,remove}