const express = require("express");
const app = express();

const port = process.env.PORT || 8080; 
app.listen(port, _ => console.log("Server is running on port 8080"));