const express = require("express");
const { port, host } = require("./configuration");
const { connectDb } = require("./helpers/db");
const app = express();

app.get("/test", (req, res) => {
  res.send(`Api | test ${port} ${host}`);
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Api | Started on port: ${port}`);
    console.log(`Api | Host: ${host}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
