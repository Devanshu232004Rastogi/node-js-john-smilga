const products = require("../models/product");

const productRoute = async (req, res) => {
  const { featured } = req.query;
  const queryObject = new Object();
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }
  prod = await products.find(queryObject);
  console.log(queryObject);
  res.status(200).json({  nBhits: prod.length, prod });
};
const productStaticRoute = (req, res) => {
  //     throw new Error('async-express-error trying')
  res.status(200).json({ message: `Product STatic page` });
};

module.exports = { productRoute, productStaticRoute };
