const router = require("express").Router();
const userController = require("../controller/userController");

router.get("/all", userController.getUsers);
router.get("/userCheck", userController.getUser);
router.post("/login", userController.login);
router.get("/", userController.getAUser);
router.post("/register", userController.register);

// router.post("/logout", userController.logout);
// router.patch("/:id:", userController.updateUser);
// router.delete("/:id:", userController.deleteUser);

module.exports = router;
