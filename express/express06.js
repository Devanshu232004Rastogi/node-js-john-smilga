//query Strings

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/api/products/query", (req, res) => {
  const { search, limit } = req.query;
  let newProd = [...products];

  if (search) {
    newProd = newProd.filter((prod) => prod.name.startsWith(search));
  }
  if (limit) {
    newProd = newProd.slice(0, Number(limit));
  }

  if (
    newProd.length < 1 ||
    limit > products.length ||
    search > "z" ||
    search < "a"
  ) {
    res.status(200).send({ success: false });
  }
  res.json(newProd);
});

app.listen(5000);
