const router = require("express").Router();
const medicController = require("../controller/medicController");

router.get("/allMedics", medicController.getDoctors);

router.get("/", medicController.getADoctor);
router.get("/verify", medicController.verifyDoctor);
router.post("/login", medicController.login);
router.post("/register", medicController.register);

module.exports = router;
