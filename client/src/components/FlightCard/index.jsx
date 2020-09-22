import React from "react";
import "./styles.css";

function FlightCard(props) {
    console.log(props.flight);

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
    {props.flight.length !== 0 ? (
        props.flight.map((item) => {
            return(
                <>
                    <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="flight-container-card">
                                <div className="row">
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Airline</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Departure</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Arrival</p></strong>
                                </div>
                                <div className="col tripHeader">
                                    <strong><p className="query-text2">Duration</p></strong>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col" align="center">
                                        <p className="query-text">{item.airlineDeparture}</p>
                                    </div>
                                    <div className="col" align="center">
                                        <div>
                                            <p className="hour query-text">{changeFormat(item.departureTime)}</p>
                                            <p className="country query-text">{item.iataDeparture}</p>
                                        </div>
                                    </div>
                                    <div className="col" align="center">
                                        <div>
                                            <p className="hour query-text">{changeFormat(item.arrivalTime)}</p>
                                            <p className="country query-text">{item.iataArrival}</p>
                                        </div>
                                    </div>
                                    <div className="col" align="center">
                                        <p className="duration query-text">{durationFormat(item.durationDepart)}</p>
                                        {/* <p className="scale query-text">1 scale CDG</p> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" align="center">
                                        <p className="query-text">{item.airlineArrival}</p>
                                    </div>
                                    <div className="col" align="center">
                                        <div>
                                            <p className="hour query-text">{changeFormat(item.departureTime2)}</p>
                                            <p className="country query-text">{item.iataDeparture2}</p>
                                        </div>
                                    </div>
                                    <div className="col" align="center">
                                        <div>
                                            <p className="hour query-text">{changeFormat(item.arrivalTime2)}</p>
                                            <p className="country query-text">{item.iataArrival2}</p>
                                        </div>
                                    </div>
                                    <div className="col" align="center">
                                        <p className="duration query-text">{durationFormat(item.durationArr)}</p>
                                        {/* <p className="scale query-text">1 scale CDG</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 price-cont">
                            <p className="flight-price"><strong>Final Price:</strong> {item.price} {item.currency}</p>
                        </div>
                    </div>
                </>
            )
        })
    ): (
        <></>
    )}
    </>
    // <h1>Hola</h1>
  );
}

export default FlightCard;