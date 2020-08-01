const express = require("express");
const PORT = process.env.PORT || 8080;
const passport = require('passport')
const session = require('express-session')
const app = express();
var db = require("./models");

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret: "my password",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session())

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./routes/HTMLroutes")(app);
require("./routes/sell-api-routes")(app);
require("./routes/api-routes")(app);

db.sequelize.sync({
  force: true
}).then(() => {
  app.listen(process.env.PORT || 8080, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});