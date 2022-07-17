const Router = require("express");
const router = new Router();
const {body} = require("express-validator");

const CalculationController = require("../controllers/CalculationController");

router.post("/OutputCalc", 
    //! Проверка на наличие полей
    body('SV').exists(),
    body('CHSS').exists(),
    body('PPT').exists(),
    //! Вызов метода конртроллера
    CalculationController.OutputCalc);

module.exports = router;