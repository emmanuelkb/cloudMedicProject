const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number required"],
    },
    gender: {
      type: String,
      required: [true, "Gender required"],
    },
    height: Number,

    weight: Number,

    blood: String,

    currentSubscription: {
      type: String,
    },
    medic: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
