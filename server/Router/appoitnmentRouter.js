const router = require("express").Router();
const appointmentController = require("../controller/appointmentController");

router.post("/create", appointmentController.createAppointment);
router.get("/all/get", appointmentController.getAppointments);
router.get("/:userId", appointmentController.getAppointment);
// router.patch("/update", appointmentController.addAppointment);
router.delete("/:id", appointmentController.DelAppointment);

module.exports = router;
