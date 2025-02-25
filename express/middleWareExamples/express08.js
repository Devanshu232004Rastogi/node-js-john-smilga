// instead mentioning with each one we can directly use app.use()

const express =require('express')
const app = express ();

const myMiddleWare = (req , res , next) =>{
    const url = req.url;
    const method = req.method;
    

    console.log(url +" " + method)
    next();
 }

app.use("/api" , myMiddleWare);

app.get('/' , (req,res)=>{

    res.send(`<h1>Home Page</h1>`)


})
app.get('/about' , (req,res)=>{
res.send(`<h1>About Page</h1>`)
})
app.all("*" , (req,res)=>{
    res.send(`<h1>${req.url } page</h1> `)
})
app.listen(5000)