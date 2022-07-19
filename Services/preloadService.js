const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")
const Preload = require("../models/Preload")

class PreloadServiceServiceService {

    async PreloadCalc(userId, CVD, DZLA, KDO) {
        try {
            const candidate = await User.findByPk(userId)
            if(!candidate.PreloadId) {
            const savePreload = await Preload.create({
                CVD, DZLA, KDO
            })
            candidate.PreloadId = savePreload.dataValues.id
            await candidate.save();
            return savePreload
        } else {
            //! если запись есть, то отдаем ее
            const user = await Preload.findByPk(candidate.PreloadId)
            return user
        } }catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new PreloadServiceServiceService
