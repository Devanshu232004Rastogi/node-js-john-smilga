const {CustomizedError}=require("../errors/custom-error-handler")
const errorHandler = (err,req,res,next)=>{
if (err instanceof CustomizedError ){
  return res.status(err.statusCode).json({message:err.message})
}


return  res.status(501).json({message:"something went wrong!!"})
}
module.exports = errorHandler;