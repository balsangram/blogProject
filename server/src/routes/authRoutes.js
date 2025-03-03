const Router = require("express");

const router = Router();

router.post("/login");
router.post("/logout");
router.post("/refresh-token");

module.exports=(router);