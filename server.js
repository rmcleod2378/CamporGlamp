const express = require("express");
const app = express();
const glamp = require("./route");

app.use(express.static("./camporglamp"));
app.use(express.json());
app.use("/", glamp)

const port = process.env.PORT || 8080; 

app.listen(port, _ => console.log("Server is running on port 8080"));