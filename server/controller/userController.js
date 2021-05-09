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
    const { userId } = req.query;
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

const getUser = async (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }
  token = token.split(" ")[1];
  try {
    let claims = jwt.verify(token, "123456789");
    const user = await User.findOne({ _id: claims._id });
    res.status(201).json({ user });
    return next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthenticated" });
  }
};

// const getUser = async (req, res) => {
//   try {
//     let cookie = req.cookies["jwt"];
//     let claims = jwt.verify(cookie, "123456789");
//     if (!claims) {
//       return res.status(401).send({ message: "Unauthenticated" });
//     }

//     const user = await User.findOne({ _id: claims._id });

//     const { password, ...data } = await user.toJSON();

//     res.send(data);
//   } catch (error) {
//     return res.status(401).send({ message: "Unauthenticated" });
//   }
// };

// const verifyToken = async (req, res, next) => {
//   let token = req.headers["Authorization"];

//   if (!token) {
//     return res.status(401).json({ message: "Not Authorized" });
//   }

//   token = token.split(" ")[1];

//   try {
//     let user = jwt.verify(token, "123456789");
//     req.user = user.id;
//     console.log(user);
//     return next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid Token" });
//   }

//   next();
// };

// const logout = (req, res) => {
//   res.cookie("jwt", "", { maxAge: 0 });
//   res.send({ message: "success" });
// };

module.exports = { register, getUsers, getUser, login, getAUser };
