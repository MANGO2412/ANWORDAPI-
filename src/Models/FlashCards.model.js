const {DataTypes}=require('sequelize')
const db=require('./DB');
const User=require('./User.model')


const FlashCards=db.define('flashcards',{
    front:{
        type:DataTypes.STRING,
        allowNull:false
    },
    back:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timetodisplay:{
        type:DataTypes.TIME,
    
    }  
},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

FlashCards.belongsTo(User,{foreignKey:{name:'usr'}});

module.exports=FlashCards