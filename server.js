const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./routes/buy-api-routes.js")(app);
require("./routes/html-routes")(app);
require("./routes/sell-api-routes")(app);
require("./routes/login-HTMLroutes")(app);
require("./routes/login-api-routes")(app);
// Start our server so that it can begin listening to client requests.
db.sequelize.sync({
    force: true
}).then(() => {
    app.listen(process.env.PORT || 8080, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});