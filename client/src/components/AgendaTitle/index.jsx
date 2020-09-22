import React from "react";
import "./styles.css";

function AgendaTitle(props) {

    let changeFormat = (date) => {
        let newDate = date.split("T");
        return newDate[0]
    }

    const { flight } = props;
    console.log("HOLA!!!!!!!!!!!!!!!!!!!!!!", props, flight);

  return (
    <>
    {flight.length !== 0 ? (
        flight.map((item) => {
            return(
                <div className="agenda-tit">
                    <div className="row title-info">
                        <div className="col-6 agenda-title">
                            <p className="tripInfo-card">{item.tripName}</p>
                        </div>
                        <div className="col-3 agenda-date">
                            <p className="tripInfo-card">Date: {changeFormat(item.departureDate)}</p>
                        </div>
                        <div className="col-3 trip-type">
                            <p className="tripInfo-card">{item.category}</p>
                        </div>
                    </div>
                </div>
            )
        })
        
  ): (
      <></>
  )}
    </>
    );
}

export default AgendaTitle;