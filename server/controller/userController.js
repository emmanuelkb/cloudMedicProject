const Doctor = require("../Models/Doctor");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidator } = require("../utils/validation");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

//for message and conversation
const getAUser = async (req, res) => {
  try {
    const userId = req.query.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const register = async (req, res) => {
  const result = await registerValidator.validateAsync(req.body);
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
    height,
    weight,
    blood,
    currentSubscription,
  } = result;

  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    res.status(400).json({ message: "Email already exists." });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
    gender,
    height,
    weight,
    currentSubscription,
    blood,
  });

  res.status(201).json({ user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Invalid Credentials");
  }

  const token = jwt.sign({ _id: user._id }, "123456789", { expiresIn: "1h" });

  res.status(201).json({ token });
};

//verify user by token
const getUser = async (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  token = token.split(" ")[1];
  try {
    let claims = jwt.verify(token, "123456789");
    const user = await User.findOne({ _id: claims._id });
    const medic = await Doctor.findOne({ _id: user.medic });
    res.status(201).json({ user, medic });
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthenticated" });
  }
};

const addMedic = async (req, res) => {
  try {
    const { id } = req.params;
    const { medicId } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { medic: medicId },
      { new: true }
    );
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMedic = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const medic = await Doctor.findOne({ _id: user.medic });
    res.status(201).json({ medic });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  getUsers,
  getUser,
  login,
  getAUser,
  addMedic,
  getMedic,
  updateUser,
};
