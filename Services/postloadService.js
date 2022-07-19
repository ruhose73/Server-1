const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")
const Postload = require("../models/Postload")

class PostloadServiceService {

    async PostloadCalc(userId, PPT, SV , CVD, SrAD, LAsr, DZLA) {
        try {
            const candidate = await User.findByPk(userId)
            if(!candidate.PostloadId) {
                const SSS = ((SrAD - CVD)/SV);
                const ISSS = (SSS*PPT);
                const LSS = ((SrAD-DZLA)/SV);
                const ILSS = (LSS*PPT);
                const savePostload = await Postload.create({
                    SSS,ISSS,LSS,ILSS,SrAD,LAsr
                })
                candidate.PostloadId = savePostload.dataValues.id
                await candidate.save();
                return savePostload
            } else {
                //! если запись есть, то отдаем ее
                const user = await Postload.findByPk(candidate.PostloadId)
                return user
        } }catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new PostloadServiceService
