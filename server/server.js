require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./Router/userRouter");
const conversationRouter = require("./Router/conversationRouter");
const messageRouter = require("./Router/messageRouter");
const medicRouter = require("./Router/medicRouter");

require("./config/dbConnect");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/medic", medicRouter);

app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);

app.listen(4000, () => console.log("Server up and running"));
