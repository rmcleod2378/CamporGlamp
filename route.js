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

glamp.get("/glamp", (req, res) => {
  pool.query("select * from glampsites where state='MI'").then(function(result) {
    res.send(result.rows);
  console.log("GET req made");
  })
  
});

module.exports = glamp;

// res.send(req.params.state);