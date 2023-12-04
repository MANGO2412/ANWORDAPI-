const FlashCards=require('../Models/FlashCards.model');

const getALL=async (req,res)=>{
    try {
        let resp=await FlashCards.findAll()
        res.json(resp)
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const getById=async (req,res)=>{
    try {
     let resp= await FlashCards.findAll({where:{id:req.params.id}})
     res.json(resp);       
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const getByUser=async (req,res)=>{
    try {
        let resp=await FlashCards.findAll({where:{usr:req.params.id}})
        res.json(resp);
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const add=async (req,res)=>{
    try {
        let resp=await FlashCards.create(req.body)
        if(resp.id){
            res.json({message:"the flashcard was creatd successfully"});
        }
        res.status(500).json({message:"the flashcard wasn't creatd successfully"});
    } catch (e) {
        res.status(500).send(e.message)
    }
}
  

const update=async(req,res)=>{
    try {
        let resp=await FlashCards.update(req.body,{where:{
            usr:req.params.id
        }})

        if(resp){
            return res.json({message:"that flaschard was updated successfully"}); 
        }

        return res.status(500).json({message:"that flashcard wasn't upadated, check if it exists"})
    } catch (e) {
        res.status(500).send(e.message)
    }
}


const remove=async (req,res)=>{
    try {
         let resp=await FlashCards.destroy({where:{
           id:req.params.id
         }})
         res.json(resp);  
    } catch (e) {
        res.status(500).send(e.message)
    }
}



module.exports={getALL,getById,getByUser,add,update,remove}