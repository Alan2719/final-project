import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUp(){

    toast.configure();
   
    const history = useHistory();
    
    const [userInfo, setUserInfo] = useState({
        username:"",
        email:"",
        password:""
    });

    const [account, setAccount] = useState({});

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
        if (userInfo.username === "" || userInfo.email === "" || userInfo.password === "") {
            displayToast("All fields are required!", "error")
        } else {
            API.signup(userInfo)
            .then(result => {
                setAccount(result.data)
                console.log(result.data);
                history.push({
                    pathname:"/login"
                });
            })
            .catch(err => console.log(err));
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
            <SignUpForm 
                onChange={handleSaveInfo}
                handleSubmitForm={handleSubmitForm}
            /> 
            <Footer /> 
        </div>
    )
}

export default SignUp;