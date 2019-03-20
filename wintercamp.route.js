"use strict";

const express = require("express");
const wintercamp = express.Router();
const pool = require("./connection");

wintercamp.get("/wintercamp", (req, res) => {
  pool.query("select * from wintercamping order by random() limit 1").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});

module.exports = wintercamp;