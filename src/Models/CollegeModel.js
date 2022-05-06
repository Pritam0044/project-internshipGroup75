const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim:true
    },
    fullName: {
      type: String,
      required: true,
      trim:true
    },
    logoLink: {
      type: String,
      required: true,
      trim:true,
      validate: {
        validator: function (v) {
          return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/.test(
            v
          );
        },
        message: "Please enter a valid logoLink",
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
