import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../components/Wrapper2";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import "./styles.css";

let array = [];

function Checklist() {
    
    const history = useHistory();

    const inputRef = useRef();

    const [list, setList] = useState({
        items: []
    });
    
    const [currentTrip, setCurrentTrip] = useState({})

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(list);
        API.userTrips()
        .then(dbTrip => {
            console.log(dbTrip.data);
            if (dbTrip.data === "") {
                history.push({
                    pathname:"/login"
                });
            } else {
                setUserInfo(dbTrip.data);
                setCurrentTrip(dbTrip.data.trips[(dbTrip.data.trips.length) - 1]);
                // console.log(userInfo);
                // console.log(currentTrip);
            }
        })
    },[]);

    function addToCheckList(event) {
        event.preventDefault();
        const inputValue = inputRef.current.value;
        array.push(inputValue);
        setList({
            items: array
        });
        console.log(list);
        inputRef.current.value = "";
    }

    function removeItem(index) {
        console.log(index);
        let newArray = list.items;
        newArray.splice(index, 1);
        setList({
            items: newArray
        })
    }

    function saveCheckList() {
        console.log(userInfo);
        console.log(list);
        let tripId = userInfo.trips[(userInfo.trips.length) - 1]._id;
        API.checkList({ id: tripId, baggage: list })
        .then(dbBaggage => {
            console.log(dbBaggage);
            history.push({
                pathname:"/agenda"
            });
        })
    }

    return(
        <>
        <Header>
            <h5>Your trip <span><strong></strong></span> has been saved! Create your travel checklist</h5>
        </Header>
        <Wrapper>
        <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text checklist" id="basic-addon1"><i class="fas fa-tasks"></i></span>
                </div>
                <input type="text" ref={inputRef} className="form-control" placeholder="Add an item" aria-label="Username" aria-describedby="basic-addon1" className="addAnItem"></input>
                <div className="input-group-append">
                    <button type="button" onClick={addToCheckList} className="btn btn-primary add">Add</button>
                </div>
            </div>
            <List 
                items = {list}
                removeItem = {removeItem}
            />
            <button onClick={saveCheckList} class="btn btn-primary">Save</button>
        </Wrapper>
        <Footer />
        </>
    )

}

export default Checklist;