const express = require("express");
const myMiddleWare = require("./external Middleware/myMiddleWare");
const userAuth = require("./external Middleware/userAuthMiddleWare");

const app = express();

app.use([myMiddleWare,userAuth])


app.get("/q" , (req,res)=>{
    res.send(`<h1>Home Page</h1>`)
})




app.listen(5000)