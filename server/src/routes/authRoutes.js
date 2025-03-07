const Router = require("express");
const { login, logout, refreshToken,register,update, deleteUser } = require("../controllers/authController");

const router = Router();

router.post("/register",register)
router.post("/login", login);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteUser);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

module.exports=(router);