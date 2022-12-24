const express = require("express");
const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Api | test");
});

app.listen(PORT, () => {
  console.log(`Api | Started on port: ${PORT}`);
});
