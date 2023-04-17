const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category");


exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.file,  body: req.body})

  const { name, price, quantity, description, category, createdBy } = req.body;
  let productPicture = [];

  if (req.files.length > 0) {
    productPicture = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPicture,
    category,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

exports.getProductBySlug =  (req, res) => {
  const { slug } = req.params;
  Category.find({slug: slug}).select("_id ").exec((error, category) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (category) {
      Product.find(category._id).exec((error, products) => {
        if (error) {
          return res.status(400).json({ error });
        }
        
          if (products.length > 0) {
           return res.status(200).json({
              products,
              priceRange: {
                under1k: 5000,
                under10k: 10000,
                under20k: 20000,
                under50k: 50000,
                under100k: 100000,
                under400k: 400000,
                under900k: 900000,
                under1M: 1000000,

              },
              productsByPrice: {
                under1k: products.filter((product) => product.price <= 5000),
                under10k: products.filter(
                  (product) => product.price > 5000 && product.price <= 10000
                ),
                under20k: products.filter(
                  (product) => product.price > 10000 && product.price <= 20000
                ),
                under50k: products.filter(
                  (product) => product.price > 20000 && product.price <= 50000
                ),
                under100k: products.filter(
                  (product) => product.price > 50000 && product.price <= 100000
                ),
                under400k: products.filter(
                  (product) => product.price > 100000 && product.price <= 400000
                ),
                under900k: products.filter(
                  (product) => product.price > 400000 && product.price <= 900000
                ),
                under1M: products.filter(
                  (product) => product.price > 900000
                ),
              },
            });
          }
         else {
          res.status(200).json({ products });
        }
      });
    }
  });
};
