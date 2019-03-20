const express = require("express");
const app = express();
const glamp = require("./route");
const wintercamp = require("./wintercamp.route");
const winterglamp = require("./winterglamp.route");

app.use(express.static("./camporglamp"));
app.use(express.json());
app.use("/", glamp)
app.use("/", winterglamp)
app.use("/", wintercamp)

const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));