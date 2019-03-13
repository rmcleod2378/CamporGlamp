"use strict";

const express = require("express");  
const glamp = express.Router();   
const pool = require("./connection");

// function selectAll(req, res){
//   pool.query("select * from glampsites").then(function(result) {
//     console.log()
//     res.send(result.rows);
//   });
// }

glamp.get("/glamp/:state", (req, res) => {
  pool.query("select * from glampsites where state=$1::text", [req.params.state]).then(function(result) {
    res.send(result.rows);
  console.log("GET req made");
  })
  
});

module.exports = glamp;

// res.send(req.params.state);