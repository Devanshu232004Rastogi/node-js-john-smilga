const userAuth = (req,res,next)=>{
    const {user} = req.query;

    if(user=="dev"){
        res.send(`<h1>Authorise User</h1>`)
    }

    // next();
}

module.exports=userAuth