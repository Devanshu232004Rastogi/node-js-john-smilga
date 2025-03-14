const productRoute = (req,res) =>{
     res.status(200).json({message:`Product page`})
}
const productStaticRoute = (req,res) =>{
    throw new Error('async-express-error trying')
     res.status(200).json({message:`Product STatic page`})
}

module.exports = {productRoute , productStaticRoute};
