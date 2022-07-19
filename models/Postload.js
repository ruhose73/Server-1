const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Postload = sequelize.define("Postload", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    SSS: {type:DataTypes.REAL},
    ISSS: {type:DataTypes.REAL},
    LSS: {type:DataTypes.REAL},
    ILSS: {type:DataTypes.REAL},  
    SrAD: {type:DataTypes.REAL},   
    LAsr: {type:DataTypes.REAL},    
})

Postload.hasMany(User);
User.belongsTo(Postload);

module.exports = Postload;