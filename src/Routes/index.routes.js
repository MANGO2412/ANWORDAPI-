const {Router}=require('express')
//routes
const users=require('./users.routes')
const flaschards=require('./flashcards.routes')
const sessionstudies=require('./sessionstudies.routes');
const word=require('./word.routes')
const authentication=require('./auth.routes')
const search=require('./searchword.routes');
const deck=require('./deck.routes');

//middleware
const auth=require('../Middlewares/auth')

const router=Router()
router.use('/auth',authentication)
router.use('/users',auth,users)
router.use('/flashcards',auth,flaschards);
router.use('/sessionstudies',auth,sessionstudies);
router.use('/word',auth,word)
router.use('/search',auth,search)
router.use('/deck',auth,deck);

module.exports=router;