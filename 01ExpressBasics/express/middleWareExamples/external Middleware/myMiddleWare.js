const myMiddleWare = (req , res , next) =>{
    const url = req.url;
    const method = req.method;
    

    console.log(url +" " + method)
    next();
 }

 module.exports = myMiddleWare;


 