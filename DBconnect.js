const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
