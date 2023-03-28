const { Sequelize,DataTypes } = require("sequelize");

const sequelize=new Sequelize('tree27m','root','#@Dharm007',{
    dialect:'mysql',
    host:'localhost'
})

const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
       type:DataTypes.STRING,
       allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync();
module.exports=User;
