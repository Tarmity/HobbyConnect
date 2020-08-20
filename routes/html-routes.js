const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render('login');
    });

    app.get("/signup", (req, res) => {
        res.render('signup');
    });
    app.get("/index", (req, res) => {
        res.render('index');
    })
};