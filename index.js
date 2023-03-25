const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hi im Chaitanya Shiva!");
});
app.listen(3000);
