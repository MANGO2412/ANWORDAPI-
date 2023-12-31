const {Router}=require("express");
const router=Router();
const deck=require('../Controllers/deck.controller');


router.get('/',deck.getALL);
router.get('/:id',deck.getById);
router.get('/user/:id',deck.getByUser);

router.post('/add',deck.add);
router.put('/update/:id',deck.update);
router.delete('/remove/:id',deck.remove);

module.exports=router;
