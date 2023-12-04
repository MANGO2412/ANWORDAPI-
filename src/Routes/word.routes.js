const {Router}=require('express')

const word=require('../Controllers/word.controller');
const router=Router();

router.get('/',word.getALL);
router.get('/:id',word.getById);
router.get('/user/:id',word.getByUser)

router.post('/add',word.add);
router.put('/update/:id',word.update)
router.delete('/remove/:id',word.remove)

module.exports=router