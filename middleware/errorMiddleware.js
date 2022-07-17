const ApiStatus = require("../handler/apiStatus");

module.exports = function(err, res, next) {
    if(err instanceof ApiStatus) {
        return res.status(err.status).json({message:err.message});
    } 
    return res.status(500).json({message:"Непредвиденная ошибка"})
}