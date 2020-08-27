const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });
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
        });
    });
    app.post("/api/addEvent", (req, res) => {
        const data = req.body;
        db.Event.create({
            name: data.eventName,
            ownerId: data.ownerid,
            event_start: data.startDate,
            event_end: data.endDate
        }).then(() => {
            res.status(200);
        }).catch(err => {
            res.status(401).json(err);
            console.log(err);
        });
    });
    app.get("/api/events", async(req, res) => {
        const eventList = await db.Event.findAll({ include: db.User, raw: true });
        console.log(eventList);
        res.json(eventList);
    })
    app.get("/api/addParticipan", async(req, res) => {
        const data = req.body;
        db.event_user.create({
            EventId: data.event,
            UserId: data.user
        }).then(() => {
            res.status(200);
        }).catch(err => {
            res.status(401).json(err);
            console.log(err);
        });
    })

};