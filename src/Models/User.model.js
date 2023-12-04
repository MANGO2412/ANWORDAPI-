const {DataTypes}=require('sequelize');
const db=require('./DB');

const User=db.define('users',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    picture:{
       type:DataTypes.STRING,
       allowNull:false
    },
    email:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

module.exports=User