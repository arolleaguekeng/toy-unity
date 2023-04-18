const Cart = require("../models/cart");


exports.addToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      /**----------- SI LES PANIER EXISTE DEJA METTRE A JOUR POUR AJOUTER DES ARTICLE ----------- */

      const toy = req.body.cartItems.toy;
      const isItem = cart.cartItems.find((c) => c.toy == toy);
      let condition, update;

      if (isItem) {
        condition = {"user": req.user._id, "cartItems.toy":toy};
        update = {
          "$set": {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: isItem.quantity + req.body.cartItems.quantity,
            },
          },
        };
      } else {
        condition = { user: req.user._id };
        update = {
          "$push": {
            "cartItems": req.body.cartItems,
          }
        }; 
      }
      Cart.findOneAndUpdate(condition, update)
        .exec((error, _cart) => {
        if (error) return res.status(400).json({ error });
        if (_cart) {
          return res.status(201).json({ cart: _cart });
        }
      });
    } else {
      /**----------- SI LES PANIER N'EXISTE PAS  DEJA CREE UN ----------- */
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};
