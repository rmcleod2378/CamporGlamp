"use strict";
//connection object that is building a way to communicate to the database; module uses a pool to save time by reusing connections
const { Pool } = require("pg");
const credentials = new Pool({
user: "postgres",
password: "password",
host: "localhost",
port: 5432,
database: "glampDB",
ssl: false
});
module.exports = credentials;  //exporting to the routes.js