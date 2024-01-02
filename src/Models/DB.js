const {Sequelize}=require("sequelize");

const {config}=require('dotenv')
config();


const db=new Sequelize(process.env.DB,process.env.USER,process.env.PASS,{
    host:process.env.HOST,
    dialect:'postgres'
    // ssl:{
    //     rejectUnauthorized: false,
    // }
})


module.exports=db;