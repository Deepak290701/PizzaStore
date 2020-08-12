const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
// helps in maintaing a code that is used again and again 
const expressLayout = require("express-ejs-layouts");
const { clearScreenDown } = require("readline");
const PORT = process.env.PORT || 3000;

// folder from where the frontend will be shown from
app.use(express.static('public'))


// template engine
app.use(expressLayout); // check its position if getting error on res.render file path
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
// if getting error regarding layout not found then make sure you have made a layout file in the views folder
//to use it before making layout use it below the routes 
// if layout file is included  then the expressLayout must be above routes



app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cart',(req,res)=>{
  res.render('customers/cart')
})

app.get('/login',(req,res)=>{
  res.render('auth/login');
})

app.get('/register',(req,res)=>{
  res.render('auth/register')
})


app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`)
});
clearScreenDown