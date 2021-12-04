const { Router } = require("express");
const router = Router();
const{ getUserInfo,PostUser,Login,updateUser,deleteUser} = require("../controllers/user_Controller");

router.get("/users/:id", getUserInfo);
router.post("/users", PostUser);
router.post("/login", Login);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;