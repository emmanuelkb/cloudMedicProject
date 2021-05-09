const { model, Schema } = require("mongoose");

const doctorSchema = new Schema(
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
      required: [true, "Phone number required"],
    },
    speciality: {
      type: String,
      required: [true, "Speciality is required"],
    },
  },
  { timestamps: true }
);

module.exports = model("Doctor", doctorSchema);
