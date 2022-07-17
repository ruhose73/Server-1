const Router = require("express");
const router = new Router();
const {body} = require("express-validator");

const CalculationController = require("../controllers/CalculationController");

router.post("/ContractilityCalc", 
    //! Проверка на наличие полей
    body('SFLZH').exists(),
    body('SFPZH').exists(),
    body('PPT').exists(),
    body('SrAD').exists(),
    body('SV').exists(),
    body('FLK').exists(),
    body('FPK').exists(),
    body('UO').exists(),
    body('KDO').exists(),
    body('KSO').exists(),
    body('IKSO').exists(),
    //! Вызов метода конртроллера
    CalculationController.ContractilityCalc);

module.exports = router;