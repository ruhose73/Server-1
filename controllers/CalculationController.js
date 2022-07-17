const ApiStatus = require("../handler/apiStatus");
const {validationResult} = require("express-validator");
const OutputService = require("../services/outputService");
const PostloadService = require("../services/postloadService");
const PreloadService = require("../services/preloadService");
const ContractilityService = require("../services/ContractilityService");


class CalculationController {

    async CalcAll(req,res,next) {

    }

    async OutputCalc(req, res, next) {
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Неверные значения"));
            }
            const  {userId, SV, CHSS, PPT} = req.body
            if(!(SV > 0.1) || !(SV < 20)) {
                return next(ApiStatus.badRequest("Неверные значения СВ"));
            }
            if(!(CHSS > 0) || !(CHSS < 300)) {
                return next(ApiStatus.badRequest("Неверные значения ЧСС"));
            }
            const outputCalc = await OutputService.OutputCalc(userId, SV, CHSS, PPT)
            return res.json(outputCalc);
        } catch (e) {
            next(e);
        }
    }

    async PostloadCalc(req, res, next) {
        
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Неверные значения"));
            }
            const  {userId, PPT, SV , CV, CVD, SrAD, LAsr, DZLA} = req.body

            console.log(userId, PPT, SV , CV, CVD, SrAD, LAsr, DZLA)
            
            
            const postloadCalc = await PostloadService.PostloadCalc(userId, PPT, SV , CV, CVD, SrAD, LAsr, DZLA )
            return res.json(postloadCalc);
        } catch (e) {
            next(e);
        }


    }

    async PreloadCalc(req, res, next) {
        try {
            
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Неверные значения"));
            }
            const  {userId, CVD, DZLA, KDO, IKDO} = req.body

            console.log(userId, CVD, DZLA, KDO, IKDO)
            
            
            const preloadCalc = await PreloadService.PreloadCalc( userId, CVD, DZLA, KDO, IKDO)
            return res.json(preloadCalc);
        } catch (e) {
            next(e);
        }

    }

    async ContractilityCalc(req, res, next) {
        try { 
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Неверные значения"));
            }
            const  {userId, SFLZH, SFPZH, PPT, SrAD, SV, FLK, FPK, UO, KDO, KSO, IKSO} = req.body

            console.log(userId, SFLZH, SFPZH, PPT, SrAD, SV, FLK, FPK, UO, KDO, KSO, IKSO)
            
            
            const contractilityCalc = await ContractilityService.ContractilityCalc( userId, SFLZH, SFPZH, PPT, SrAD, SV, FLK, FPK, UO, KDO, KSO, IKSO)
            return res.json(contractilityCalc);
        } catch (e) {
            next(e);
        }
        
    }
}

module.exports = new CalculationController