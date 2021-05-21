const { model, Schema } = require("mongoose");

const appointmentSchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "time is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User required"],
    },
    medic: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "Medic required"],
    },
  },

  { timestamps: true }
);

module.exports = model("Appointment", appointmentSchema);
