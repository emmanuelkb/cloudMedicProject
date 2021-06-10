require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("./config/dbConnect");

const userRouter = require("./Router/userRouter");
const conversationRouter = require("./Router/conversationRouter");
const messageRouter = require("./Router/messageRouter");
const medicRouter = require("./Router/medicRouter");
const appointmentRouter = require("./Router/appoitnmentRouter");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
app.use("/user", userRouter);
app.use("/medic", medicRouter);
app.use("/appointment", appointmentRouter);
app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join("client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

app.use(express.static(path.join("client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
