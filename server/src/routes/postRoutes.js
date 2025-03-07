const Router = require("express");
const { displayPost, addPost, updatePost, deletePost } = require("../controllers/postController");

const router = Router();

router.get("/",displayPost);
router.post("/add",addPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost)

module.exports = (router);