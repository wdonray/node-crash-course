const express = require("express");

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //res.send('<p>home page</p>');
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send('<p>about page</p>');
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page (404 Must got at the bottom of the code to catch any other request)
app.use((req, res) => {
  res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});
