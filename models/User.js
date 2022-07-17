const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("User", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    email: {type:DataTypes.STRING, required:true, unique:true},
    password: {type:DataTypes.STRING, required:true},
    name: {type:DataTypes.STRING, required:true}   
})

module.exports = User;