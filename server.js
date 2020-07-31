const express = require("express");
const PORT = process.env.PORT || 8080;
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express();
var db = require("./models");

// const initializePassport = require('./config/passport')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )
app.use(session({
  secret: "my password",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());


// const users = []

app.set('view-engine', 'express-handlebars')
app.use(express.urlencoded({
  extended: true
}))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
// app.use(express.urlencoded({
//     extended: true  
// }));
app.use(express.json());
// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./routes/buy-api-routes.js")(app);
require("./routes/HTMLroutes")(app);
require("./routes/sell-api-routes")(app);
// require("./routes/login-HTMLroutes")(app);
require("./routes/api-routes")(app);
// Start our server so that it can begin listening to client requests.
db.sequelize.sync({
  force: true
}).then(() => {
  app.listen(process.env.PORT || 8080, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});