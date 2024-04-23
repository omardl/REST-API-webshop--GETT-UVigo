const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

const app = express()


// Routes Imports
const readRoute = require('./routes/read');
const createRoute = require('./routes/create');
const deleteRoute = require('./routes/delete');
const updateRoute = require('./routes/update');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//ROUTES
app.use('/read', readRoute)
app.use('/create', createRoute)
app.use('/delete', deleteRoute)
app.use('/update', updateRoute)



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shop').then(() => {

  console.log('MongoDB connection successfull')

  // Run server if connection successfull
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })

}).catch((error) => {
  console.error('Error connection MongoDB:', error)
})