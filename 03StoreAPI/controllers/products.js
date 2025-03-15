const products = require("../models/product");

const productRoute = async (req, res) => {
  let { featured, company, name, sort, select, page, limit } = req.query;
  const queryObject = new Object();
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let result = products.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (select) {
    select = select.split(",").join(" ");
    result = result.select(select);
  }

  page = Number(page)||1;
  limit = Number(limit)||10;
let skip = (page-1)*limit

result = result.skip(skip).limit(limit);
  const prod = await result;
  console.log(queryObject);
  res.status(200).json({ nBhits: prod.length, prod });
};
const productStaticRoute = (req, res) => {
  //     throw new Error('async-express-error trying')
  res.status(200).json({ message: `Product STatic page` });
};

module.exports = { productRoute, productStaticRoute };
