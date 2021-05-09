const Doctor = require("../Models/Doctor");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//for checking number of doctors in the database
const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json({ doctors });
};

//for message and conversation
const getADoctor = async (req, res) => {
  try {
    const { doctorId } = req.query;
    const doctor = await Doctor.findById(doctorId);
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    speciality,
  } = req.body;

  const alreadyExist = await Doctor.findOne({ email });
  if (alreadyExist) {
    res.status(400).json({ message: "Email already exists." });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const doctor = await Doctor.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
    gender,
    speciality,
  });

  res.status(201).json({ doctor });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let doctor = await Doctor.findOne({ email });
  if (!doctor) {
    return res.status(400).send("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, doctor.password);
  if (!isMatch) {
    return res.status(400).send("Invalid Credentials");
  }

  const token = jwt.sign({ _id: doctor._id }, "123456789", { expiresIn: "1h" });

  res.status(201).json({ token });
};

const verifyDoctor = async (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  token = token.split(" ")[1];
  try {
    let claims = jwt.verify(token, "123456789");
    const doctor = await Doctor.findOne({ _id: claims._id });
    res.status(201).json({ doctor });
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthenticated" });
  }
};

module.exports = { getDoctors, getADoctor, register, login, verifyDoctor };
