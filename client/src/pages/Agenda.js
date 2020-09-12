import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Navbar2 from "../components/Navbar";
import MyTrips from "../components/MyTrips";
import AgendaTitle from "../components/AgendaTitle";
import AgendaContainer from "../components/AgendaContainer";
import LocationCard from "../components/LocationCard";
import FlightCard from "../components/FlightCard";
import Footer from "../components/Footer";
import API from "../utils/API";
import ModalChecklist from "../components/ModalChecklist";

function Agenda() {
  const [trip, setTrip] = useState([]);

  const [oneTrip, setOneTrip] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    API.allTrips().then((dbTrips) => {
      console.log(dbTrips.data);
      setTrip(dbTrips.data);
    });
  }, []);

  function filterFlight(event) {
    event.preventDefault();
    let tripId = event.currentTarget.getAttribute("data-value");
    const filterTrip = trip.filter((item) => item._id === tripId);
    console.log(tripId, filterTrip);
    setOneTrip(filterTrip);
  }

  function getChecklist(event) {
    event.preventDefault();
    console.log("HOLA", event.target);
    filterFlight(event);
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }


  return (
    <div>
      <Navbar2 />
      <Wrapper>
        <div className="row">
          <div className="col-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <MyTrips
              tripsInfo={trip}
              filterFlight={filterFlight}
              getChecklist={getChecklist}
            />
          </div>
          <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <AgendaContainer>
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                  <AgendaTitle 
                    flight={oneTrip}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                  <FlightCard flight={oneTrip} />
                </div>
              </div>
              <div className="row">
                <LocationCard />
              </div>
            </AgendaContainer>
          </div>
        </div>
        <ModalChecklist
          oneList={oneTrip[0]}
          show={showModal}
          onHide={handleHideModal}
        />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Agenda;
