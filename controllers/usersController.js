const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
    authorize: function(req,res) {
        if (!req.user) {
            res.json("Unauthorized");
        } else {
            res.json(req.user);
        }
    },
    getUser: function(req, res) {
        if (!req.user) {
            res.json({})
        } else {
            res.json({
                email: req.user.email,
                username: req.user.username,
                _id: req.user.id
            })
        }
        /*db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));*/
    },
    loggedUser: function(req, res) {
        if (!req.user) {
            res.json({})
        } else {
            db.User.findOne({
                _id: req.user.id
            })
            .populate({
                path:'trips',
                populate: {
                    path: 'checklist'
                }
            })
            .then(user => {
                res.json(user);
            })
        }
        /*db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));*/
    },
    create: function(req, res) {
        db.User
        .create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbModel => {
            console.log(dbModel);
            res.redirect("/api/users/login");
        })
        .catch(err => res.status(422).json(err));
    },
    logout: function(req,res) {
        console.log(req);
        req.logout();
        // res.redirect("/api/users/login");
    }
};
