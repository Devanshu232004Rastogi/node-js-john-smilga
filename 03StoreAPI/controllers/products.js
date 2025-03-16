const products = require("../models/product");

const productRoute = async (req, res) => {
  let { featured, company, name, sort, select, page, limit, numericFilter } =
    req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true"; // Convert string to boolean
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // Handle numeric filters before executing the query
  if (numericFilter) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    numericFilter = numericFilter.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    numericFilter.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        if (!queryObject[field]) queryObject[field] = {};
        queryObject[field][operator] = Number(value);
      }
    });
  }

  let result = products.find(queryObject); // Now queryObject has numeric filters applied

  // Sorting
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // Field selection
  if (select) {
    select = select.split(",").join(" ");
    result = result.select(select);
  }

  // Pagination
  page = Number(page) || 1;
  limit = Number(limit) || 10;
  let skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  
  const prod = await result;
  res.status(200).json({ nBhits: prod.length, prod });
};

const productStaticRoute = (req, res) => {
  res.status(200).json({ message: `Product Static page` });
};

module.exports = { productRoute, productStaticRoute };
