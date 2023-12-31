const { DataTypes } = require('sequelize');
const User=require('./User.model');
const db=require('./DB');

const Word=db.define("words",{
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  sound:{
    type:DataTypes.JSON,
    allowNull:false
  },
  typeword:{
    type:DataTypes.STRING,
    allowNull:false
  },
  meaning:{
    type:DataTypes.JSON,
    allowNull:false
  }

},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

Word.belongsTo(User,{foreignKey:{name:'usr'}});

module.exports=Word;