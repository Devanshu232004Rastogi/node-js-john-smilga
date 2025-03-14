require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorMid = require("./middleware/error-handler");
const connectDB= require('./db/connect')
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Store API </h1> <a href="/api/v1/products">Products</a>`);
});

app.use(notFound);
app.use(errorMid);

const port = process.env.PORT || 3000;
const startServer = async () => {
  try {
     await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is running ${port}`));
  } catch (error) {
    console.log(error);
    
  }
};

startServer()