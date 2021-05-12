const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://emmanuelkb:ekwab@2010@dev.vzwvi.mongodb.net/cloudmedic?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));
