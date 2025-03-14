require("dotenv").config();

const connectDB = require("./db/connect")
const Products  = require('./models/product')
const productJson = require('./products.json')

const startPopulate =async ()=>{

  try {
    await connectDB(process.env.MONGO_URI)
    await Products.deleteMany();
    await  Products.create(productJson);
    console.log('Success!!!!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }


}
startPopulate();
