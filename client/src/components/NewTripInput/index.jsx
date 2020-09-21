import React, { useContext } from "react";
import "./styles.css";
import DayPickerDeparture from "../DayPickerDeparture";
import DayPickerReturn from "../DayPickerReturn";
import 'react-day-picker/lib/style.css';

function NewTripInput(props) {
        
  return (
    <div className="container infoTripCont">
        <form className="form newtrip-container">
            <h5 className="newtrip-form-title">PLAN YOUR NEXT TRIP!</h5>
            <div className="row firstRow">

                <div className="col-lg-3 col-sm-6">
                <div className="input-group-prepend mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fas fa-plane-departure"></i>
                        </span>
                    <input type="text" name="origin" className="newtrip-form-control form-control" placeholder="Origin" {...props}/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                <div className="input-group-prepend mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fas fa-plane-arrival"></i>
                        </span>
                    <input type="text" name="destination" className="newtrip-form-control form-control" placeholder="Destination" {...props}/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                <div className="input-group-prepend mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fas fa-plane"></i>
                        </span>
                        <select className="custom-select newtrip-form-control" name="category"  id="inputGroupSelect01" {...props}>
                        <option value="" disabled selected hidden>Category</option>
                        <option>Business</option>
                        <option>Vacation</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="row">
                        <div className="col-4">
                                {/* <div className="input-group mb-3"> */}
                                <div className="input-group-prepend mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="fas fa-user-friends"></i>
                                    </span>
                                    <select className="custom-select newtrip-form-control" name="numberOfPeople" id="inputGroupSelect01" {...props}>
                                        <option value="" disabled selected hidden>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                        </div>    
                        <div className="col-4">
                            <div className="input-group-prepend mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fas fa-calendar-times"></i>
                                </span>
                                <div className="finput-group mb-3">
                                    <DayPickerDeparture className="custom-select newtrip-form-control" name="departure" id="inputGroupSelect01" {...props}/>
                                </div>
                            </div>
                        </div>    
                        <div className="col-4">
                            <div className="input-group-prepend mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i class="fas fa-calendar-times"></i>
                                </span>
                                <div className="input-group mb-3">
                                    <DayPickerReturn className="custom-select newtrip-form-control" name="arrival" id="inputGroupSelect01" {...props}/>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="col-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="input-group-prepend mb-3">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fas fa-pen-alt"></i>
                        </span>
                        <input type="text" className="newtrip-form-control form-control" name="tripname" placeholder="Name your trip" {...props}/>  
                    </div>
                </div>     
            </div>
            <button className="btn btn-primary" onClick={props.getFlights}>Search</button>
        </form>
    </div>

  );
}

export default NewTripInput;
