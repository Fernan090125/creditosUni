const User = require("../models/userModel");
const Credito = require("../models/creditModel");

const userController = {};

userController.getUserInfo = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  const credit = await Credito.findOne({ user });
  console.log(credit);
  res.json({
    User: user,
    Credit: credit,
  });
};

userController.PostUser = async (req, res) => {
  const user = new User(req.body);
  const is = await User.findOne({ email: req.body.email });
  if (is) {
    res.status(400).json({
      message: "El usuario ya existe",
    });
  } else {
    await user.save();
    res.status(200).json({
      status: "User Saved",
    });
  }
};

userController.Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({
      status: "User not found",
    });
  } else {
    if (user.password === password) {
      res.status(200).json({
        role: user.rol,
      });
    } else {
      res.status(404).json({
        status: "Password incorrect",
      });
    }
  }
};

userController.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  };
  await User.findByIdAndUpdate(id, { $set: user }, { new: true });
  res.json({
    status: "User Updated",
  });
};

module.exports = userController;
