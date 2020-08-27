const path = require("path");
const db = require("../models");

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
        if (!req.isAuthenticated()) {
            res.redirect("/")
        }
        res.render('index', { user: req.user });
    })
    app.get("/eventInfo", (req, res) => {
        if (!req.isAuthenticated()) {
            res.redirect("/");
        }
        res.render('eventInfo', { name: req.name });
    })
};