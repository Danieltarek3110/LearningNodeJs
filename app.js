const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
const verifyToken = require('./Middleware/authMiddleware');

const blogRoutes = require('./Routes/blogRoutes');
const UserRoutes = require('./Routes/userRoutes');

const app = express();

//Connect to MongoDB
const dburi = "mongodb://localhost:27017/"
//const dburi = "mongodb+srv://Danieldb:test1234@testclusterdaniel01.1ebqorq.mongodb.net/BlogsDB?retryWrites=true&w=majority";

mongoose.connect(dburi)
        .then( (result)=> {
            app.listen(3000);
            console.log(chalk.bold("Connected to DB"));
        })
        .catch((err => console.log(err)));

 
//Register View Engine
app.set('view engine' , 'ejs' );


/* ________________________________________________________________________________________________ */

//Middleware and Static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
//Logging
app.use(morgan('dev' , ))


app.get('/' ,verifyToken ,(req , res)=>{
    res.render('index');

} );

app.get('/login' , (req , res)=>{
    res.render('login');

} );

app.get('/about' , (req , res)=>{
    res.render('index');
} );

app.get('/add-product' , (req , res)=>{
    res.render('add-product');
} );

app.get('/edit-product' , (req , res)=>{
    res.render('edit-product');
} );

app.get('/products' , (req , res)=>{
    res.render('products');
} );





//REDIRECTS
app.get('/about-us' , (req , res)=>{
    res.redirect('/about');
} );


//Blog Routes
app.use('/blogs' , blogRoutes);

//User Router
app.use(express.json());
app.use('/user' , UserRoutes);


//404 Page
app.use( (req , res)=> {
    res.status(404).render('404');
    

});


