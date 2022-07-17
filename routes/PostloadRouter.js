const Router = require("express");
const router = new Router();
const {body} = require("express-validator");

const CalculationController = require("../controllers/CalculationController");

router.post("/PostloadCalc", 
    //! Проверка на наличие полей
    body('PPT').exists(),
    body('SV').exists(),
    body('CVD').exists(),
    body('SrAD').exists(),
    body('LAsr').exists(),
    //! Вызов метода конртроллера
    CalculationController.PostloadCalc);

module.exports = router;