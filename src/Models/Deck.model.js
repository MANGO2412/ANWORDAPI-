const {DataTypes}=require('sequelize');
const db=require('./DB');
const User=require('./User.model')

const Deck=db.define('deck',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    newamountword:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    learnamountword:{
        type:DataTypes.BIGINT,
        allowNull:false
    }
},{
    freezeTableName: true,
    createdAt:false,
    updatedAt:false
})

Deck.belongsTo(User,{foreignKey:{name:'usr'}});
module.exports=Deck;



