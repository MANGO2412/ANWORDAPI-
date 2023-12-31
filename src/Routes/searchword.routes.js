//libraries
const {Router}=require('express');
const router=Router();
const {scrappingDictionary}=require('../helper/helper')



router.get('/:word',(req,res)=>{
        scrappingDictionary(req.params.word,(result)=>{
           res.json(result);
        }) 
})

module.exports=router