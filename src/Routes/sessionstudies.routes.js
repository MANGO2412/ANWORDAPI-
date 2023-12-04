const {Router}=require("express")
const sessionstudies=require('../Controllers/sessionstudies.controller');
const router=Router();

router.get('/',sessionstudies.getALL);
router.get('/:id',sessionstudies.getById);
router.get('/user/:id',sessionstudies.getByUser);

router.post('/add',sessionstudies.add);
router.put('/update/:id',sessionstudies.update);
router.delete('/remove/:id',sessionstudies.remove);

module.exports=router;
