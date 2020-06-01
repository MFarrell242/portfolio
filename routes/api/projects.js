const router = require("express").Router();
const projController = require("../../controllers/projectController");

router.route("/")
    .get(projController.findAll)
    .post(projController.create);