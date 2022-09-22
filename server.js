const express = require("express");
const app = express();

require("dotenv").config();

const DBconnect = require("./DBconnect");
DBconnect();
app.use(express.json());
app.use("/person", require("./Router/person"));

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is running");
});
