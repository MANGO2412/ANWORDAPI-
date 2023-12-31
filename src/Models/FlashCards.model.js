const {DataTypes}=require('sequelize')
const db=require('./DB');
const Deck=require('./Deck.model');


const FlashCards=db.define('flashcards',{
    word:{
        type:DataTypes.STRING,
        allowNull:false
    },
    definition:{
        type:DataTypes.STRING,
        allowNull:false
    },
    region:{
       type:DataTypes.JSON,
       allowNull:false 
    },
    timetodisplay:{
        type:DataTypes.TIME
    }  
},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

FlashCards.belongsTo(Deck,{foreignKey:{name:'dck'}});
module.exports=FlashCards