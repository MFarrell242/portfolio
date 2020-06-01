const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/portfolio"
);

const projSeed = [
    {
        title: "Hiragana Heroes",
        description: "Website which aids the user in learning Hiragana, the Japanese alphabet",
        hubLink: "https://github.com/MFarrell242/Hiragana_Heroes",
        liveLink: ""
    },
    {
        title: "Myooz",
        description: "Service for finding groups of people to attend avents with",
        hubLink: "https://github.com/HoomieJanell/project_2",
        liveLink: ""
    }
];

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(projSeed))
    .then(data => {
        console.log(data.result.n + " projects created");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });