const mongoose = require("mongoose");
require("dotenv").config();

MONGODB_URI =
  "mongodb+srv://emmanuelkb:ekwab@2010@dev.vzwvi.mongodb.net/cloudmedic?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/cloudmedic", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));
