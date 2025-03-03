const express = require("express");
const app = express();

const { people } = require("./data.js");

app.get("/api/people", (req, res) => {
  res.status(200).json({ status: "Ok", data: people });
});

app.listen(5000);
