const Router = require('express')
const router = new Router
const AuthRouter = require("./AuthRouter")
const CalcRouter = require("./CalcRouter")
const OutputRouter = require("./OutputRouter")
const PostloadRouter = require("./PostloadRouter")
const PreloadRouter = require("./PreloadRouter")
const ContractilityRouter = require("./ContractilityRouter")

router.use("/auth", AuthRouter)
router.use("/calc", CalcRouter)
router.use("/output", OutputRouter)
router.use("/postload", PostloadRouter)
router.use("/preload", PreloadRouter)
router.use("/Contractility", ContractilityRouter)

module.exports = router