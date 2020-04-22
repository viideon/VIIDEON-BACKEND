const User = require("../models/user");
const {
  hashPassword,
  comparePassword,
  generateToken
} = require("./../helpers/helper");
const userService = require("../services/userService");

module.exports.registerUser = async (req, res) => {
  try {
    const person = await userService.findByNameEmail(
      req.body.email,
      req.body.userName
    );
    if (person && person.email === req.body.email)
      return res.status(400).send("Email already registered!");
    if (person && person.userName === req.body.userName)
      return res.status(400).send("Username is already taken");
    const hash = await hashPassword(req.body.password);
    const user = new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: hash
    });
    const register = await user.save();
    res.status(201).json({ register, message: "Successfully registered!" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await userService.findUserByEmail(req.body.email);
    if (!user) return res.status(404).send("Email is not registered!");
    const passwordCheck = await comparePassword(
      req.body.password,
      user.password
    );
    if (!passwordCheck) return res.status(400).send("Password do not match");
    const token = generateToken(user);
    if (!token) return res.status(500).send("Error in generating token");
    res
      .status(201)
      .json({ user: user, token, message: "Successfully logged in" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      res.status(400).json({ message: "Can't update profile" });
      return;
    }
    res
      .status(201)
      .json({ user: user, message: "Successfully Updated Profile!" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(201).json({ user: users });
  } catch (error) {
    res.status(400).json(error);
  }
};
