const express = require("express")
const router = express.Router();

router.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      res.status(200).send(`<h1>Hello ${name}</h1>`);
    } else {
      res.status(404).send(`<h1>Non Authentic</h1>`);
    }
  });

  module.exports = router;
