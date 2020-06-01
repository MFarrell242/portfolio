const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projSchema = new Schema({
    title: { type: String, required: true},
    description: String,
    hubLink: { type: String, required: true},
    liveLink: {type: String, required: true}
});

const Project = mongoose.model("Project", projSchema);

module.exports = Project;