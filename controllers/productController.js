//Thanh Tam Dang - 301393448

const Product = require('../models/productModel');

// CREATE a new product
exports.addNewProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const saveProduct = new Product(req.body);
    res.status(201).send(saveProduct);
  } catch (error) {
    res.status(400).send({ message: 'Error adding product', error });
  }
};

// READ all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products', error });
  }
};

// GET a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching product', error });
  }
};

// UPDATE a product by ID
exports.updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true 
    });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ message: 'Error updating product', error });
  }
};



// DELETE a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting product', error });
  }
};

//remove
exports.removeAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    res.status(200).send({ message: 'All products removed successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error removing products', error });
  }
};

exports.findProductsByName = async (req, res) => {
  try {
    const productName = req.params.name;
    const product = await Product.findOne({ name: new RegExp('^' + productName + '$', 'i') });
     
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
      

