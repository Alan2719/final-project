import React from "react";
import "./styles.css";

function MyTripsList(props) {
    console.log(props.tripsInfo)
  return (
    <>
        <div className= "container trips-list">
                <div className="col-12">
                    <h5 className="card-header trips-heading">MY TRIPS</h5>
                    {/* <div className="card-body trip-names"> */}
                        <ul className="list-group tripsList">
                        {props.tripsInfo.length !== 0 ? (
                            props.tripsInfo.map(({ tripName, _id }) => {
                                return(
                                    <li name="tripname" className="list-group-item card-text tripName">
                                        <div onClick={props.filterFlight} data-value={_id}>
                                        {tripName}
                                        </div>
                                        <button
                                            type="button"
                                            data-toggle="modal"
                                            className="btn btn-primary"
                                            onClick={props.getChecklist}
                                            data-value={_id}
                                        >
                                            <i class="fas fa-clipboard-list"></i>
                                        </button>
                                        <button type="button" 
                                            className="btn btn-danger deleteBtn"
                                            onClick={props.deleteTrip}
                                            data-value={_id}
                                        >
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </li>
                                )
                            })
                        ): (
                            <></>
                        )}
                        </ul>
                    {/* </div> */}
                </div>
            </div>
    </>
    // <h1>Hola</h1>
    );
}

export default MyTripsList;