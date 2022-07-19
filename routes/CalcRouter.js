const Router = require("express");
const router = new Router();
const {body} = require("express-validator");

const CalculationController = require("../controllers/CalculationController");

router.post("/new", CalculationController.CalcAll);

module.exports = router;