"use strict";
const express       = require("express");
const apiUsers      = require("./Products/API/ApiUsers");
const app           = express();
const versionInfo   = "API V1 Made with by Thắng";

app.get("/", (req, res) => { res.send(versionInfo); });
app.use("/users", apiUsers);
app.use("/groups", apiUsers);

module.exports = app;
