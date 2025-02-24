const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(
    `<h1>Let's Navigate to Product Page <a href="/api/products"> Products</a></h1>`
  );
});
app.get("/api/products/:prodId", (req, res) => {
  const prodId = Number(req.params.prodId);
  const prodById = products.find((prod) => prod.id === prodId);

  if (!prodById) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(prodById);
});
app.listen(5000);
