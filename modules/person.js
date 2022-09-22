const mongoose = require("mongoose");

const schema = mongoose.Schema;

const persnonSchema = new schema({
  name: String,
  age: Number,
});
const person = mongoose.model("person", persnonSchema);

module.exports = person;
