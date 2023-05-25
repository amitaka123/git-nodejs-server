require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const server = express(); //server starts
// const productRouter = express.Router();
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router')

// console.log(process.env.DB_PASSWORD) // remove this after you've confirmed it is working

//database connection
main().catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce2');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log('database connected');

}
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');//this is shortcut and dirty method for connection.
// that's why we use above async await method. 



//bodyParser
server.use(express.json());
server.use(morgan('default')); //thirdparty and it is logger
server.use(express.static('public'));
// server.use('/api', productRouter);
// server.use('/', productRouter);
// server.use('/api/v1', productRouter.router);
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);




//server ending
server.listen(process.env.PORT,()=>{
  console.log('server started');
});

