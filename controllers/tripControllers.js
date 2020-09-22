const db = require("../models");

module.exports = {
    create: function(req,res) {
        console.log("TRIP BODY",req.body);
        let userId = req.body.extraInfo.userId;
        console.log(userId);
        db.Trip.create({
            origin: req.body.info.origin,
            destination: req.body.info.destination,
            category: req.body.info.category,
            numberOfPeople: req.body.info.numberOfPeople,
            departureDate: req.body.info.departureDate,
            arrivalDate: req.body.info.arrivalDate,
            tripName: req.body.info.tripname,
            price: req.body.extraInfo.price,
            currency: req.body.extraInfo.currency,
            departureTime: req.body.extraInfo.departureTime,
            arrivalTime: req.body.extraInfo.arrivalTime,
            departureTime2: req.body.extraInfo.departureTime2,
            arrivalTime2: req.body.extraInfo.arrivalTime2,
            airlineDeparture: req.body.extraInfo.airlineDeparture,
            airlineArrival: req.body.extraInfo.airlineArrival,
            durationDepart: req.body.extraInfo.durationDepart,
            durationArr: req.body.extraInfo.durationArr,
            iataDeparture: req.body.extraInfo.iataDeparture,
            iataArrival: req.body.extraInfo.iataArrival,
            iataDeparture2: req.body.extraInfo.iataDeparture2,
            iataArrival2: req.body.extraInfo.iataArrival2
        })
        .then(({_id}) => {
            console.log("TRIPID",_id);
            db.User.findByIdAndUpdate({ _id: userId }, { $push: { trips: _id } }, { new: true })
            .then(dbUser => res.json(dbUser));
        }) 
        .catch(err => { 
            res.json(err);
        });
    },

    getTrips: function(req,res) {
        db.Trip.find()
        .populate('checklist')
        .then(dbTrips => {
            res.json(dbTrips);
        })
    },
    deleteTrip: function(req, res) {
        console.log("DELETE FROM BACKEND");
        let tripId = req.body.tripId;
        console.log(req.body);
        // db.Trip
        // .findById({ _id: tripId })
        // .then(dbModel => dbModel.remove())
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
        res.json("TRIP DELETED");
  }
}