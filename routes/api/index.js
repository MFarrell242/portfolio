const router = require("express");
const projRoutes = require("./projects");

router.request("/projects", projRoutes);

module.exports = router;