const route = require("express").Router();
const User = require("../models/user");
const {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken
} = require("./../helpers/helper");

route.post("/register", async (req, res) => {
  try {
    const person = await User.findOne({ email: req.body.email });
    if (person) res.status(400).send("Email already registered!");
    const userName = await User.findOne({ userName: req.body.userName });
    if (userName) res.status(400).send("Username is already taken");
    const hash = await hashPassword(req.body.password);
    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: hash
    });
    const register = await user.save();
    res
      .status(201)
      .json({ register, message: "Successfully registered!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).send("Email is not registered!");
    const passwordCheck = await comparePassword(
      req.body.password,
      user.password
    );
    console.log("password result::", passwordCheck);
    if (!passwordCheck) res.status(400).send("Password donot match");
    const token = generateToken(user);
    console.log("token result::", token);
    if (!token) res.status(500).send("Error in generating token");
    res
      .status(201)
      .json({ user: user, token, message: "Successfully generated User" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

route.patch("/update/:id", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          ...req.body
        }
      }
    );
    res.status(201).json({ user: user, message: "Successfully Updated Profile!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res
      .status(201)
      .json({ user: user });
  } catch (error) {
    res.status(400).json(error);
  }
});
route.get("/", (req, res) => {
  res.send("Server is running ");
});

module.exports = route;