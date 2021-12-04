const Credito = require("../models/creditModel");
const User = require("../models/userModel");
creditController = {};

creditController.NewCredit = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log((await Credito.find({ user })).length);
  if ((await Credito.find({ user })).length > 0) {
    res.status(400).json({
      message: "Ya tienes un credito activo",
    });
  } else {
    const credit = new Credito(req.body);
    credit.user = user;
    await credit.save();
    res.status(200).json({
      message: "Credito guardado",
      id: credit._id,
    });
  }
};

creditController.RenovateCredit = async (req, res) => {
  try {
    const { id } = req.params;
    const newdata = req.body;
    const user = await User.findById(id);
    await Credito.findByIdAndUpdate(user, newdata);
    await Credito.findByIdAndUpdate(user, { Estado: "Activo" });
    res.status(200).json({
      status: "Credito renovado",
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
    });
  }
};

creditController.RemoveCredit = async (req, res) => {
  const { id } = req.params;
  await Credito.findByIdAndRemove(id);
  res.stauts(200).json({
    status: "Credito eliminado",
  });
};

module.exports = creditController;
