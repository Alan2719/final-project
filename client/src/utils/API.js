import axios from "axios";

export default {
  // Login
  login: function(userInfo) {
    return axios.post("/api/users/login",userInfo);
  },
  // Signup
  signup: function(userInfo) {
    return axios.post("/api/users/signup",userInfo);
  },
  getUserInfo: function() {
    return axios.get("/api/users/user/");
  },
  getCities: function() {
    return axios.get("/api/cities/allcities");
  },
  lookFlights: function(flightInfo) {
    return axios.post("/api/flightInfo/flight", flightInfo);
  },
  saveTrip: function(tripInfo) {
    return axios.post("/api/trip/createTrip", tripInfo);
  },
  userTrips: function() {
    return axios.get("/api/users/userTrip");
  },
  checkList: function(baggageInfo) {
    return axios.post("/api/baggage/checklist", baggageInfo);
  },
  allTrips: function() {
    return axios.get("/api/trip/tripInfo");
  },
  logout: function() {
    return axios.get("/api/users/logout");
  },
  delete: function(tripId) {
    return axios.delete("/api/trip/deleteTrip", tripId);
  }
};