const {Router}=require("express");
const flashcards=require('../Controllers/flashcards.controller');
const router=Router();

router.get('/',flashcards.getALL);
router.get('/:id',flashcards.getById);
router.get('/user/:id',flashcards.getByUser);

router.post('/add',flashcards.add);
router.put('/update/:id',flashcards.update);
router.delete('/remove/:id',flashcards.remove);

module.exports=router;