const express = require("express");
const personRouter = express.Router();

// post
const Person = require("../modules/person");
personRouter.post("/add", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    let result = await newPerson.save();
    res.send({ person: result, msg: "person added successfuly" });
  } catch (error) {
    console.log(error);
  }
});
// get all
personRouter.get("/", async (req, res) => {
  try {
    let result = await Person.find();
    res.send({ person: result, msg: "all person" });
  } catch (error) {
    console.log(error);
  }
});
// get by ID
personRouter.get("/:id", async (req, res) => {
  try {
    let result = await Person.findById({ _id: req.params.id });
    res.send({ person: result, msg: "person" });
  } catch (error) {
    console.log(error);
  }
});
// delete
personRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "person deleted" });
  } catch (error) {
    console.log(error);
  }
});

// update
personRouter.put("/:id", async (req, res) => {
  try {
    let result = await Person.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "person updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = personRouter;
