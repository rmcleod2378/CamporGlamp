"use strict";

const express = require("express");
const glamp = express.Router();
const pool = require("./connection");

glamp.get("/glamp", (req, res) => {
  pool.query("select * from mergedsites").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});

module.exports = glamp;