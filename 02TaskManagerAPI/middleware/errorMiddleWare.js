const errorHandler = (err,req,res,next)=>{
  return  res.status(501).json({message:"something went wrong!!"})
}
module.exports = errorHandler;