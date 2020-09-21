import React, { useState, useRef } from "react";
import LogInForm from "../components/Login";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login(){

    toast.configure();

    const history = useHistory();

    const [userInfo, setUserInfo] = useState({
        email:"",
        password:""
    });

    const [account, setAccount] = useState({});

    const [id, setId] = useState("");      

    function handleSaveInfo(event) {
        event.preventDefault();
        const value = event.target.value;
        console.log(event.target.name);
        setUserInfo({
            ...userInfo,
            [event.target.name]: value
        })
    }

    function handleSubmitForm(event) {
        event.preventDefault();
        if (userInfo.email === "" || userInfo.password === "") {
            displayToast("All fields are required!", "error")
        } else {
            API.login(userInfo)
            .then(result => {
                setAccount(result.data)
                console.log(result.data._id);
                if (result === "Unauthorized") {
                    console.log("Incorrect Password");
                } else {
                    setId(result.data._id);
                    history.push({
                        pathname:"/newtrip"
                    });
                }
            })
            .catch(err => {
                console.log(err.message);
                if (err.message === "Request failed with status code 401") {
                    displayToast("Your email and/or password are wrong", "error");
                }
            })
        }
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

    return (
        <div>
            {/* <Navbar />  */}
            <LogInForm 
                onChange={handleSaveInfo}
                handleSubmitForm={handleSubmitForm}
            /> 
            <Footer /> 
        </div>
    )
}

export default Login;