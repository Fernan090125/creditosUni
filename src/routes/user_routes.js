const { Router } = require("express");
const router = Router();
const{ getUserInfo,PostUser,Login,updateUser} = require("../controllers/user_Controller");

router.get("/users/:id", getUserInfo);
router.post("/users", PostUser);
router.post("/login", Login);
router.put("/users/:id", updateUser);

module.exports = router;