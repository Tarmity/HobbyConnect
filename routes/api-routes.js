const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id
        })
    })
    app.post("/api/signup", (req, res) => {
        console.log(req.body);
        db.User.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch(err => {
            res.status(401).json(err);
            console.log(err);
        })
    })
    app.post("/api/addEvent", (req, res) => {
        db.Event.create({

        })
    })

}