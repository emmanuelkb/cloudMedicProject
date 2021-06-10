const Doctor = require("../Models/Doctor");
const User = require("../Models/User");
const Appointment = require("../Models/Appointment");

const createAppointment = async (req, res) => {
  const { date, time, user, medic } = req.body;

  const selectedDate = await Appointment.findOne({ date });
  const selectedTime = await Appointment.findOne({ time });

  if (selectedDate && selectedTime) {
    res.status(400).json({ message: "Selected slot not available" });
    return;
  }

  try {
    const appointment = await Appointment.create({
      date,
      time,
      user,
      medic,
    });
    const userFromId = await User.findById(user);
    const medicFromId = await Doctor.findById(medic);
    console.log(userFromId);
    console.log(medicFromId);

    userFromId.appointments.push(appointment._id);
    medicFromId.appointments.push(appointment._id);
    await userFromId.save();
    await medicFromId.save();

    res.status(201).json({ appointment });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.status(200).json({ appointments });
};

const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    res.status(200).json({ appointment });
  } catch (err) {
    res.status(500).json(err);
  }
};

// const addAppointment = async (req, res) => {
//   try {
//     const { appointmentId } = req.body;
//     const { userId } = req.body;
//     const { medicId } = req.body;
//     const user = await User.findByIdAndUpdate(userId);
//     user.appointments.push(appointmentId);
//     const medic = await Doctor.findByIdAndUpdate(medicId);
//     medic.appointments.push(appointmentId);
//     await medic.save();
//     await user.save();

//     res.status(201).json({ user, medic });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const DelAppointment = async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findByIdAndDelete(id);
  res.status(200);
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointment,
  DelAppointment,
};
