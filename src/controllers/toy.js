const Toy = require("../models/Toy");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category");


exports.createToy = (req, res) => {
  // res.status(200).json({ file: req.file,  body: req.body})

  const { name, price, quantity, description, category, createdBy } = req.body;
  let toyPicture = [];

  if (req.files.length > 0) {
    toyPicture = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const toy = new Toy({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    toyPicture,
    category,
    createdBy: req.user._id,
  });

  toy.save((error, toy) => {
    if (error) return res.status(400).json({ error });
    if (toy) {
      res.status(201).json({ toy, files: req.files });
    }
  });
};

exports.getToyBySlug =  (req, res) => {
  const { slug } = req.params;
  Category.find({slug: slug}).select("_id ").exec((error, category) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (category) {
      Toy.find(category._id).exec((error, toys) => {
        if (error) {
          return res.status(400).json({ error });
        }
        
          if (toys.length > 0) {
           return res.status(200).json({
              toys,
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
              toysByPrice: {
                under1k: toys.filter((toy) => toy.price <= 5000),
                under10k: toys.filter(
                  (toy) => toy.price > 5000 && toy.price <= 10000
                ),
                under20k: toys.filter(
                  (toy) => toy.price > 10000 && toy.price <= 20000
                ),
                under50k: toys.filter(
                  (toy) => toy.price > 20000 && toy.price <= 50000
                ),
                under100k: toys.filter(
                  (toy) => toy.price > 50000 && toy.price <= 100000
                ),
                under400k: toys.filter(
                  (toy) => toy.price > 100000 && toy.price <= 400000
                ),
                under900k: toys.filter(
                  (toy) => toy.price > 400000 && toy.price <= 900000
                ),
                under1M: toys.filter(
                  (toy) => toy.price > 900000
                ),
              },
            });
          }
         else {
          res.status(200).json({ toys });
        }
      });
    }
  });
};
