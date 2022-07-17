const Router = require("express");
const router = new Router();
const {body} = require("express-validator");

const CalculationController = require("../controllers/CalculationController");

router.post("/PreloadCalc", 
    //! Проверка на наличие полей
    body('CVD').exists(),
    body('DZLA').exists(),
    body('KDO').exists(),
    body('IKDO').exists(),
    //! Вызов метода конртроллера
    CalculationController.PreloadCalc);

module.exports = router;