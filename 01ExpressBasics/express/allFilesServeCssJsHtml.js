const { createServer } = require("http");
const { readFileSync } = require("fs");

const htmlFile = readFileSync(`${__dirname}/navbar-app/index.html`);
const htmlStyle = readFileSync(`${__dirname}/navbar-app/styles.css`);
const htmlLogic = readFileSync(`${__dirname}/navbar-app/browser-app.js`);
const htmlLogo = readFileSync(`${__dirname}/navbar-app/logo.svg`);

const server = createServer((req, res) => {
  let url = req.url.toLowerCase();

  if (url === "/" || url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlFile);
    res.end();
    console.log("<h1>Home Page</h1>");

  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" }); // ✅ Fixed MIME type
    res.write(htmlStyle);
    res.end();

  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(htmlLogic);
    res.end();

  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" }); // ✅ Fixed MIME type
    res.write(htmlLogo);
    res.end();

  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" }); // ✅ Added Content-Type
    res.end(`<h1>About Page</h1>`);
    console.log("<h1>About Page</h1>");

  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" }); // ✅ Added Content-Type
    res.end(`<h1>Contact Page</h1>`);
    console.log("<h1>Contact Page</h1>");

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>Page Not Found 😖</h1>`);
    console.log("<h1>Page Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
