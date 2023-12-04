const {Router}=require('express')
//controller
const user=require('../Controllers/user.controller');
const router=Router();

router.get("/",user.getALL);
router.get("/:id",user.getById);
router.put('/update/:id',user.update)
router.delete('/remove/:id',user.remove)

module.exports=router;