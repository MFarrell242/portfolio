const router = require("express").Router();
const projRoutes = require("./projects");

router.use("/projects", projRoutes);

module.exports = router;