const Router = require("express")

const router = Router();

router.get("/");
router.post("/add");
router.patch("/:id");
router.delete("/:id")

module.exports = (router);