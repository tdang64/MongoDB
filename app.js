//Thanh Tam Dang - 301393448
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const Product = require('./models/productModel');



app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



fetch('http://localhost:8080/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });



  fetch('http://localhost:8080/api/products')
  .then(response => response.text()) 
  .then(text => {
    console.log(text); 
    return JSON.parse(text); 
  })
  .catch(error => {
    console.error('Error parsing JSON:', error);
  });





const dbURI = 'mongodb+srv://tdang64:hihihaha@cluster0.ino2a.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Cluster0';
    mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB connected');

    Product.find().then(products => {
      console.log('Products:', products);
    }).catch(err => {
      console.error('Error fetching products:', err);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res) => {
    res.send('Welcome to the Marketplace!'); 
    console.log('Connected')
});
app.use('/api', productRoutes);
 
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});