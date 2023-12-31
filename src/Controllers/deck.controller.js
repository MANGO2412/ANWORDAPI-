const Deck=require('../Models/Deck.model');


const getALL=async (req,res)=>{
    try {
        let resp=await Deck.findAll()
        res.json(resp)
    } catch (e) {
        
        res.status(500).send(e.message)
    }
}


const getById=async (req,res)=>{
    try {
     let resp= await Deck.findAll({where:{id:req.params.id}})
     res.json(resp);       
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const getByUser=async (req,res)=>{
    try {
        let resp=await Deck.findAll({where:{usr:req.params.id}})
        res.json(resp);
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const add=async (req,res)=>{
    try {
        let resp=await Deck.create(req.body)
        if(resp.id){
          return   res.json({message:"the Deck was creatd successfully"});
        }
        return res.status(500).json({message:"the Deck wasn't creatd successfully"});
    } catch (e) {
        res.status(500).send(e.message)
    }
}
  

const update=async(req,res)=>{
    try {
        let resp=await Deck.update(req.body,{where:{
            id:req.params.id
        }})

        if(resp){
            return res.json({message:"that Deck was updated successfully"}); 
        }

        return res.status(500).json({message:"that Deck wasn't upadated, check if it exists"})
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const remove=async (req,res)=>{
    try {
         let resp=await Deck.destroy({where:{
           id:req.params.id
         }})
         res.json(resp);  
    } catch (e) {
        res.status(500).send(e.message)
    }
}



module.exports={getALL,getById,getByUser,add,update,remove}