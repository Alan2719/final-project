import React, { useContext, useState } from "react";
import "./styles.css";
import Button from "../Button";

function Flights(props) {
    console.log(props.flightInfo);
    //const array = flightInfo.map(info => info.itineraries[0].segments[0].departure);
    // console.log(array);
    // const { tripInfo, setTripInfo } = useContext(FlightContext);
    // const values = useContext(APIContext);
    // const [flightInfo, setFlightInfo] = useState(values.flightInfo);
    // console.log(flightInfo);
    // // console.log(FlightContext);
    // // console.log(APIContext);
    // console.log(values);
    // // console.log({flightInfo});
    let changeFormat = (date) => {
        let newDate = date.split("T");
        return newDate[1]
    }

    let durationFormat = (duration) => {
        let newDuration = duration.split("T");
        return newDuration[1]
    }

    return (
        <>
        {/* <h1>Hola</h1> */}
        {props.flightInfo.length !== 0 ? (
            props.flightInfo.map(({ id, itineraries, oneWay, price, travelerPricings }) => {
                return (
                    <div className="container resultsCont">
                        <div className="row flights-container">
                            <div className="col-10 col-lg-10 col-md-9 col-sm-10 col-xs-12">

                            <div className="flight-container">
                            <div className="row">
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Airline</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Departure</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Arrival</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Duration</p></strong>
                                </div>
                            </div>
                                <div className="row departureRow">
                                    <div className="col" align="center">
                                        <p className="query-text2">{itineraries[0].segments[0].carrierCode}</p>
                                    </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour query-text2">{changeFormat(itineraries[0].segments[0].departure.at)}</p>
                                        <p className="country query-text2">{itineraries[0].segments[0].departure.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                        <p className="scale query-text2">{itineraries[0].segments.length > 1 ? (itineraries[0].segments.length -1) + " Scale(s)" : "Direct"}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour query-text2">{changeFormat(itineraries[0].segments[(itineraries[0].segments.length) -1].arrival.at)}</p>
                                        <p className="country query-text2">{itineraries[0].segments[(itineraries[0].segments.length) -1].arrival.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration query-text2">{durationFormat(itineraries[0].duration)}</p>
                                </div>
                            </div>
                            <div className="row arrivalRow">
                                <div className="col" align="center">
                                    <p className="query-text2">{itineraries[1].segments[0].carrierCode}</p>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour query-text2">{changeFormat(itineraries[1].segments[0].departure.at)}</p>
                                        <p className="country query-text2">{itineraries[1].segments[0].departure.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <i class="fas fa-plane-departure"></i>
                                        <p className="scale query-text2">{itineraries[1].segments.length > 1 ? (itineraries[1].segments.length -1) + " Scale(s)" : "Direct"}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <div>
                                        <p className="hour query-text2">{changeFormat(itineraries[1].segments[(itineraries[1].segments.length - 1)].arrival.at)}</p>
                                        <p className="country query-text2">{itineraries[1].segments[(itineraries[1].segments.length - 1)].arrival.iataCode}</p>
                                    </div>
                                </div>
                                <div className="col" align="center">
                                    <p className="duration query-text2">{durationFormat(itineraries[0].duration)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-2 col-lg-2 col-md-3 col-sm-2 col-xs-4 buttonCont">
                        <div className="priceInfo">
                            <p className="price query-text2">{travelerPricings[0].price.total * 2} {price.currency}</p>
                            <p className="general-content query-text2">per person</p>
                            <div className="selectBtn">
                                <button type="button" class="btn btn-outline-primary " onClick={props.handleFlights} data-toggle="modal" data-value={id} data-target="#staticBackdrop">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }) 
        ) : (
            <></>
        )}
        </>
        // </> 
    );
}

export default Flights;