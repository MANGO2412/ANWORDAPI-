const { DataTypes } = require('sequelize');
const User=require('./User.model')
const db=require('./DB');

const Sessionstudies=db.define('sessionstudies',{
  amountwords:{
    type:DataTypes.STRING,
    allowNull:false
  },
  duration:{
    type:DataTypes.TIME,
    allowNull:false
  }
},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

Sessionstudies.belongsTo(User,{foreignKey:{
    name:'usr'
}})

module.exports=Sessionstudies;