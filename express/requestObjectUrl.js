const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url.toLowerCase();
  res.writeHead(200, { "Content-Type": "text/html" });

  if (url === "/" || url === "/home") {
    res.end(`<h1>Home Page</h1>`);
    console.log("<h1>Home Page</h1>");
  } else if (url === "/about") {
    res.end(`<h1>About Page</h1>`);
    console.log("<h1>About Page</h1>");
  } else if (url === "/contact") {
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
