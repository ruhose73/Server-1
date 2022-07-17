const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const User = require("./User")

const Preload = sequelize.define("Preload", {
    id: {type:DataTypes.INTEGER, required:true, primaryKey:true, autoIncrement:true},
    CVD: {type:DataTypes.REAL, required:true},
    DZLA: {type:DataTypes.REAL, required:true},
    KDO: {type:DataTypes.REAL, required:true},
    IKDO: {type:DataTypes.REAL, required:true},   
})

Preload.hasMany(User);
User.belongsTo(Preload);

module.exports = Preload;