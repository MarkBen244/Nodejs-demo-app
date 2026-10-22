const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from my Node.js CI/CD pipeline!",
        status: "success"
    });
});

module.exports = app;
