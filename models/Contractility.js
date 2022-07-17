const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Contractility = sequelize.define("Contractility", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    URLZH: {type:DataTypes.REAL, required:true},
    IYRLZH: {type:DataTypes.REAL, required:true},
    RLK: {type:DataTypes.REAL, required:true},
    IRLK: {type:DataTypes.REAL, required:true},   
    URPZH: {type:DataTypes.REAL, required:true},
    IURPZH: {type:DataTypes.REAL, required:true},
    RPK: {type:DataTypes.REAL, required:true},
    IRPK: {type:DataTypes.REAL, required:true},
    FV: {type:DataTypes.REAL, required:true},
    KSO: {type:DataTypes.REAL, required:true},
    IKSO: {type:DataTypes.REAL, required:true}
})

Contractility.hasMany(User);
User.belongsTo(Contractility);

module.exports = Contractility;