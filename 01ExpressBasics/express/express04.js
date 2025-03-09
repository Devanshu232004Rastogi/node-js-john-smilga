const express = require("express");
const { products } = require("./data.js");
const app = express();

app.get("/", (req, res) => {
  res.send(
    `<H1>Lets Go to product page : <a href="/api/product">Products</a> </H1>`
  );
});

app.get("/api/product", (req, res) => {
  const newProd = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });
  res.json(newProd);
});

app.listen(5000);
