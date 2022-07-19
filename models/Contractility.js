const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Contractility = sequelize.define("Contractility", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    URLZH: {type:DataTypes.REAL},
    IYRLZH: {type:DataTypes.REAL},
    RLK: {type:DataTypes.REAL},
    IRLK: {type:DataTypes.REAL},   
    URPZH: {type:DataTypes.REAL},
    IURPZH: {type:DataTypes.REAL},
    RPK: {type:DataTypes.REAL},
    IRPK: {type:DataTypes.REAL},
    FV: {type:DataTypes.REAL},
    KSO: {type:DataTypes.REAL},
    IKSO: {type:DataTypes.REAL}
})

Contractility.hasMany(User);
User.belongsTo(Contractility);

module.exports = Contractility;