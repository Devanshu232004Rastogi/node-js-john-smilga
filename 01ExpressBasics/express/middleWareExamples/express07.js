// //basics of middleware

// const express =require('express')
// const app = express ();

// const myMiddleWare = (req , res , next) =>{
//     const url = req.url;
//     const method = req.method;
    

//     console.log(url +" " + method)
//     next();
//  }

// app.get('/' ,myMiddleWare, (req,res)=>{

//     res.send(`<h1>Home Page</h1>`)


// })
// app.get('/about' ,myMiddleWare, (req,res)=>{
// res.send(`<h1>About Page</h1>`)
// })
// app.listen(5000)



// exporting middle ware from external file 


const express =require('express')
const app = express ();

const myMiddleWare = require ("./myMiddleWare")

app.get('/' ,myMiddleWare, (req,res)=>{

    res.send(`<h1>Home Page</h1>`)


})
app.get('/about' ,myMiddleWare, (req,res)=>{
res.send(`<h1>About Page</h1>`)
})
app.listen(5000)