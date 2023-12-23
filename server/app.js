const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();  // variable app contains all express methods and properties

dotenv.config({path: './config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

app.use(cookieParser());


const PORT = process.env.PORT;


// middleware

// const middleware = (req, res, next) => {
//     console.log("middleware");
//     next();
// }

// middleware();


// app.get("/about", (req, res) => {
//     res.send("Hello from about page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Hello from contact page");
// });

// app.get("/signin", (req, res) => {
//     res.send("Hello from login page");
// });

// app.get("/signup", (req, res) => {
//     res.send("Hello from registration page");
// });

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});