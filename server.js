require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Router/userRouter");
const conversationRouter = require("./Router/conversationRouter");
const messageRouter = require("./Router/messageRouter");
const medicRouter = require("./Router/medicRouter");
const path = require("path");
require("./config/dbConnect");
const PORT = process.env.PORT || 4000;
const socketPORT = process.env.PORT || 8900;

app.use(express.json());
app.use(cors());

// Socket middleware
const io = require("socket.io")();
// (socketPORT, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("a user connected.");
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

//   //take userId and socketId from user
//   socket.on("addUser", (userId) => {
//     addUser(userId, socket.id);
//     io.emit("getUsers", users);
//   });

//when disconnect
// end of socket middleware

app.use("/user", userRouter);
app.use("/medic", medicRouter);
app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
