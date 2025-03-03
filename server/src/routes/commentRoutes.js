const Router = require("express");
const {addComments , deleteCommments} = require("")

const router = Router();

router.post("/add",addComments)
router.delete("/delete/:id",deleteCommments)

module.exports = (router);