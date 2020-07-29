var db = require("../models");
var isAuthenticated = require('../config/middleware/isAuthenticated.js');

// ROUTES
function router(app) {
   
  // show cart by user id
  app.get("/cart", isAuthenticated, function(request, response) {
    db.Cart
      .findAll({
        where: {
          UserId: request.user.id
        },
        include: [db.Product]
      })
      .then(function(cartItems) {
        response.render('cart', {cartItems, user: request.user});
        // response.json(cartItems);
      })
      .catch(function(err) {
        console.log(err.message);
        response.send(err);
      });
  });

  // add new item to cart
  app.post("/cart/:itemId", isAuthenticated, function(request, response) {
    db.Cart.create({
      UserId: request.user.id,
      ProductId: request.params.itemId,
      quantity: request.body.quantity, // TODO 
    }).then(function(addedItem) {
      // response.json(addedItem);
      response.redirect('/products');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
      });

  });

  //update quantity
   app.put("/cart/:itemId", isAuthenticated, function(request, response) {
    db.Cart
      .update({quantity: request.body.quantity},{
        where: {
          UserId: request.user.id,
          ProductId: request.params.itemId
        },
        include: [db.Product]
      })
      .then(function(cartItems) {
        // response.json(cartItems);
        response.redirect('/cart');
      })
      .catch(function(err) {
        console.log(err.message);
        response.send(err);
      });
  });

   //delete item from cart
   app.delete('/cart/:itemId', isAuthenticated, function(request, response) {
    db.Cart.destroy({
      where: {
        UserId: request.user.id,
        id: request.params.itemId,
      }
    }).then(function() {
      response.redirect('/cart');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });
}

module.exports = router;