#!/usr/bin/env node
//upper line : treat next code as NODE JS code

//import the NPM package : 'express' to manage the request from URL
const express = require("express");

//initialise a express object and saves its reference into the 'app' variable
const app = express();
const file = "./DB/users.json";

//gives the reference about the express object TO the module userRoutes.js that has to be included in the code.
require("./routes/userRoutes")(app, file); 

// port on which to run the server
const PORT = 5000;

// listen on the port
app.listen(PORT, () => {
  console.log(`Server running`);
});