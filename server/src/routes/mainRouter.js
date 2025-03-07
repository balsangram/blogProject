const Router = require("express"); 
const authRoutes = require("./authRoutes");
const commentRoutes = require("./commentRoutes");
const adminRoutes = require("./adminRoutes");
const postRoutes = require("./postRoutes");
const reportRoutes = require("./reportRoutes");

const router = Router();

router.use('/admin/',adminRoutes);
router.use('/',authRoutes);
router.use('/comment/', commentRoutes);
router.use('/post/',postRoutes);
// router.use('/report/',reportRoutes)

module.exports = (router);

