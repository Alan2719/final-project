import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Header from "../components/Header";
import NewTripInput from "../components/NewTripInput";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import Flights from "../components/Flight";
import Loading from "../components/loading";
import Modal from "../components/Modal";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NewTrip() {

    toast.configure();

    const history = useHistory();

    const [tripInfo, setTripInfo] = useState({
        origin:"", 
        destination:"",
        category:"",
        numberOfPeople:"",
        departureDate:"",
        arrivalDate:"",
        tripname:"",
        price:"",
        children: 1,
        travelClass: null,
        nonStop: null,
        currencyCode: "MXN",
        maxPrice: null
    });

    const [flightInfo, setFlightInfo] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [oneFlight, setOneFlight] = useState([]);

    useEffect(() => {
        console.log(flightInfo);
        API.getUserInfo()
        .then(dbUser => {
            console.log(dbUser.data);
            if (dbUser.data === "") {
                history.push({
                    pathname:"/login"
                });
            } else {
                setUserInfo(dbUser.data);
            }
        })
    }, [flightInfo]);

    function handleTripInfo(event) {
        console.log(event);
        if (event.preventDefault) {
            event.preventDefault();
        }
        const value = event.target.value;
        console.log(event.target.name);
        setTripInfo({
            ...tripInfo,
            [event.target.name]: value
        });
        console.log(tripInfo);
    }

    function handleFlights(event) {
        console.log(event.target.getAttribute('data-value'));
        const id = event.target.getAttribute('data-value');
        const oneFlight = flightInfo.filter(item => item.id == id);
        console.log(oneFlight);
        setOneFlight(oneFlight);
        setShowModal(true);
    }

    function getFlights(event) {
        event.preventDefault();
        console.log(tripInfo);
        console.log(typeof tripInfo.destination);
        console.log(typeof tripInfo.departureDate);
        console.log(typeof tripInfo.arrivalDate);
        if (tripInfo.origin === "" || tripInfo.destination === "" || tripInfo.departureDate === "" || tripInfo.arrivalDate === "") {
            console.log("TOAST");
            displayToast("Information is missing to start searching", "error");
        } else {
            setLoading(true);
            API.lookFlights(tripInfo)
            .then(dbFlight => {
                console.log(dbFlight.data);
                setFlightInfo(dbFlight.data);
                console.log("NEW TRIP FILE",flightInfo);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    function handleHideModal() {
        setShowModal(false);
    }

    function displayToast(message, type) {
        let options = {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        };
        if (type === "error") {
          toast.error(message, options);
        } else {
          console.error("Wrong Toast Type");
        }
    }


    function chooseFlight() {
        console.log(oneFlight);
        const additionalInfo = {
            userId: userInfo._id,
            price: oneFlight[0].price.total,
            currency: oneFlight[0].price.currency,
            durationDepart: oneFlight[0].itineraries[0].duration,
            durationArr: oneFlight[0].itineraries[1].duration,
            iataDeparture: oneFlight[0].itineraries[0].segments[0].departure.iataCode,
            iataArrival:  oneFlight[0].itineraries[0].segments[(oneFlight[0].itineraries[0].segments.length) - 1].arrival.iataCode,
            iataDeparture2: oneFlight[0].itineraries[1].segments[0].departure.iataCode,
            iataArrival2: oneFlight[0].itineraries[1].segments[(oneFlight[0].itineraries[1].segments.length) - 1].arrival.iataCode,
            departureTime: oneFlight[0].itineraries[0].segments[0].departure.at,
            arrivalTime: oneFlight[0].itineraries[0].segments[(oneFlight[0].itineraries[0].segments.length) - 1].departure.at,
            departureTime2: oneFlight[0].itineraries[1].segments[0].departure.at,
            arrivalTime2: oneFlight[0].itineraries[1].segments[(oneFlight[0].itineraries[1].segments.length) - 1].departure.at,
            airlineDeparture: oneFlight[0].itineraries[0].segments[0].carrierCode,
            airlineArrival: oneFlight[0].itineraries[1].segments[0].carrierCode,
        }
        API.saveTrip({info: tripInfo, extraInfo: additionalInfo})
        .then(dbTrip => {
            console.log(dbTrip);
            history.push({
                pathname:"/checklist"
            });
        });
    }

    return (
        <div>
            <Navbar2/>
            <Wrapper>
                <Header>
                    <h4>Welcome {userInfo.username}</h4>
                </Header>
                <NewTripInput 
                    onChange={handleTripInfo}
                    getFlights={getFlights}
                />
                {loading ? <Loading /> :
                <Flights 
                    flightInfo={flightInfo}
                    handleFlights={handleFlights}
                />}
                <Modal 
                    oneFlight = {oneFlight}
                    show = {showModal}
                    onHide = {handleHideModal}
                    chooseFlight = {chooseFlight}
                />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default NewTrip;