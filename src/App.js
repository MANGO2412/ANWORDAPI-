const express=require('express');
const cors=require('cors')
const router=require('./Routes/index.routes')

const App=express()


//cors
App.use(cors());
App.use(express.json());       // Analizador de json
App.use(express.urlencoded({extended: true}));

//routes
App.use('/api/v1/',router)

module.exports=App
