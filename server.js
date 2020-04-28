//@ts-check
/**
 * @module
 * @requires express
 * @requires express-handlebars
 * @requires module:controllers/burgers_controller
 */

/**
 * ExpressJS package
 * @name express
 */
var express = require("express");

/**
 * @name PORT
 */
var PORT = process.env.PORT || 8080;

/**
 * app reference for express()
 * @name app
 */
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// app.use('/api', apiRoutes);   // example from FriendFinder


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
