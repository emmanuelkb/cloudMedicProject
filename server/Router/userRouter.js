const router = require("express").Router();
const userController = require("../controller/userController");
const path = require("path");

router.get("/all", userController.getUsers);
router.get("/userCheck", userController.getUser);
router.post("/login", userController.login);
router.get("/user/:id", userController.getAUser);
router.post("/register", userController.register);
router.patch("/:id", userController.addMedic);
router.get("/medic/:id", userController.getMedic);
router.patch("/edit/:id", userController.updateUser);

module.exports = router;
