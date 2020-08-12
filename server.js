const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const { clearScreenDown } = require("readline");
const PORT = process.env.PORT || 3000;

// folder from where the frontend will be shown from
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home');
});

// template engine
app.use(expressLayout); // check its position if getting error on res.render file path
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`)
});
clearScreenDown