import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper2";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import API from "../utils/API";

let array = [];

function Checklist() {

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
            setUserInfo(dbTrip.data);
            setCurrentTrip(dbTrip.data.trips[(dbTrip.data.trips.length) - 1]);
            // console.log(userInfo);
            // console.log(currentTrip);
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
        })
    }

    return(
        <>
        <Navbar />
        <Header>
            <h5>Your trip <span><strong></strong></span> has been saved! Create your travel checklist</h5>
        </Header>
        <Wrapper>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-tasks"></i></span>
                </div>
                <input type="text" ref={inputRef} class="form-control" placeholder="Add an item" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <button type="button" onClick={addToCheckList} class="btn btn-primary">Add</button>
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