const router = require("express").Router();
const medicController = require("../controller/medicController");

router.get("/allMedics", medicController.getDoctors);
router.get("/md/:id", medicController.getADoctor);
router.get("/verify", medicController.verifyMd);
router.post("/login", medicController.login);
router.post("/register", medicController.register);
router.patch("/:id", medicController.addPatient);

module.exports = router;
