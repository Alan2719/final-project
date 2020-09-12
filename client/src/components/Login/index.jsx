import React from "react";
import "./styles.css";
import Image from "../../assets/logo.png";

function LogInForm(props){
    return (
        <div className="container">
            <form className="form" onSubmit = {props.handleSubmitForm}>
            <img src={Image} alt="logo" className="logo"></img>
                <p className="form-title">LOG IN</p>
                <div className="form-group">
                    <label for="exampleInputEmail1">EMAIL</label>
                    <input type="email" className="form-control emailInput" id="exampleInputEmail1" name="email" placeholder="example@email.com" aria-describedby="emailHelp" {...props}></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">PASSWORD</label>
                    <input type="password" class="form-control passwordInput" name="password" placeholder="Enter your password" id="exampleInputPassword1" {...props}></input>
                </div>
                <div className="row">
                    <div className="col-8 toLogin-col">
                        <a href="/" className="toLogin">Don't have an account?<span><strong> Register </strong></span></a>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary" type="submit" value="SUBMIT">SUBMIT</button>
                    </div> 

                    {/*<input type="password" class="form-control passwordInput" placeholder="Enter your password" id="exampleInputPassword1" ref={passwordRef}></input>*/}
         
                </div>
            </form>
        </div>
    
    )
}

export default LogInForm;