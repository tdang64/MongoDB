//Thanh Tam Dang - 301393448

const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
    
  },
  price: {
    type: Number,
    required: true,
   
  },
  quantity: {
    type: Number,
    required: true,
    
  },
  category: {
    type: String,
    required: true
  }
});
const Product = mongoose.model('Product', productSchema, 'Products');

module.exports = Product;


