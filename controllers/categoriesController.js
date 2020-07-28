// Import User Model
var db = require("../models");

// ROUTES
function router(app) {
  // show all categories
  app.get("/categories", function(req, res) {
    db.Category.findAll({}).then(function(categories) {
      res.json(categories);
    });
  });

  // show products by category name
  app.post("/products/category/:categoryName", function(req, res) {
    db.sequelize.Promise.all([
      db.Product.findAll({
        where: {
          CategoryId: req.body.categoryId
       }
      }),
      db.Category.findAll({})
    ]).spread(function(products, categories) {
      res.render('products', {products, categories, user: req.user});
    });
  });

  // create new category
  app.post("/category", function(req, res) {
    db.Category
      .create({
        name: req.body.name
      })
      .then(function(result) {
        res.send("created " + req.body.name);
      })
      .catch(function(err) {
        console.log(err.message);
        res.send(err);
      });
  });
}

module.exports = router;
