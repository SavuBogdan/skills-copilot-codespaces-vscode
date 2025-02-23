// Give me the code to create a webserver no more comments
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});