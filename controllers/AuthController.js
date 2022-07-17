const ApiStatus = require("../handler/apiStatus");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const User = require("../models/User")
const AuthDTO = require("../dto/authDTO");

class AuthController {

    async register(req,res,next) {
        const  {email, password, name} = req.body
        const candidate = await User.findOne({where:{email}})
        if(candidate) {
            return next (ApiStatus.badRequest("Пользователь существует"))
        }
        const hashedPassword = await bcrypt.hash(password, 5)
        const newUser = await User.create({
            email, 
            password: hashedPassword,
            name
        })

        const authDTO = new AuthDTO(newUser)
        return res.json(authDTO)
    }

    async login(req, res, next) {
        const  {email, password} = req.body
        const user = await User.findOne({where:{email}});
        if(!user) {
            return next (ApiStatus.badRequest("Пользователь с таким email не был найден"));
        }

        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            return next (ApiStatus.badRequest("Неверные данные"));
        }

        const authDTO = new AuthDTO(user)
        return res.json(authDTO)
    }
}

module.exports = new AuthController