const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")
const Contractility = require("../models/Contractility")

class ContractilityService {

    async ContractilityCalc(userId, SFLZH, SFPZH, PPT, SrAD, SV, FLK, FPK, UO, KDO, KSO, IKSO) {
        try {
            const candidate = await User.findByPk(userId)
            if(!candidate.ContractilityId) {
                const URLZH = (0.0136*SrAD*SV);
                const IYRLZH= (SFLZH/PPT);
                const RLK= (0.0136*SrAD*SV);
                const IRLK= (FLK/PPT);
                const URPZH= (0.0136*SrAD*UO);
                const IURPZH= (SFPZH/PPT);
                const RPK= (0.0136*SrAD*SV);
                const IRPK= (FPK/PPT);
                const FV= (100*(UO/KDO));
            const saveContractility = await Contractility.create({
                URLZH, IYRLZH, RLK, IRLK, URPZH, IURPZH, RPK, IRPK, FV, KSO, IKSO
            })
            candidate.ContractilityId = saveContractility.dataValues.id
            await candidate.save();
            return saveContractility
        } else {
            //! если запись есть, то отдаем ее
            const user = await Contractility.findByPk(candidate.ContractilityId)
            return user
        } }catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new ContractilityService
