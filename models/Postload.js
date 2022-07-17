const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Postload = sequelize.define("Postload", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    SSS: {type:DataTypes.REAL, required:true},
    ISSS: {type:DataTypes.REAL, required:true},
    LSS: {type:DataTypes.REAL, required:true},
    ILSS: {type:DataTypes.REAL, required:true},  
    SrAD: {type:DataTypes.REAL, required:true},   
    LAsr: {type:DataTypes.REAL, required:true},    
})

Postload.hasMany(User);
User.belongsTo(Postload);

module.exports = Postload;