"use strict";

const express = require("express");
const winterglamp = express.Router();
const pool = require("./connection");

winterglamp.get("/winterglamp", (req, res) => {
  pool.query("select * from winterglamping order by random() limit 1").then(function (result) {
    res.send(result.rows);
  });
});

module.exports = winterglamp;