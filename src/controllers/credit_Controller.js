const Credito = require("../models/creditModel");
const User = require("../models/userModel");
creditController = {};

creditController.NewCredit = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log((await Credito.find({ user })).length);
  if ((await Credito.find({ user })).length>0) {
    res.status(400).json({
      message: "Ya tienes un credito activo",
    });
  } else {
    const credit = new Credito(req.body);
    credit.user = user;
    await credit.save();
    res.json({
      status: "Credito guardado",
    });
  }
};

creditController.RenovateCredit = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const credit = await Credito.findById(id);
  console.log(credit);
  await Credito.findByIdAndUpdate(id, {Estado:"Activo"});
  res.json({
    status: "Credito renovado",
  });
};

creditController.RemoveCredit = async (req, res) => {
  const { id } = req.params;
  await Credito.findByIdAndRemove(id);
  res.json({
    status: "Credito eliminado",
  });
};

module.exports = creditController;
