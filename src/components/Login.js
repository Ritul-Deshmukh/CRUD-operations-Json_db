import React, { Component } from "react";
import './Login.css';
import { Link}from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <form className="back">
                <div className="space">
                <h1 className="sign">Sign In</h1>

                <div className="form-group sizepage ">
                    <label className="nameinp">Email address</label>
                    <input type="email" className="form-control inp" placeholder="Enter email" />
                </div>

                <div className="form-group sizepagepass">
                    <label className="nameinp">Password</label>
                    <input type="password" className="form-control inp" placeholder="Enter password" />
                </div>

                <div className="form-group rememberme">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Link className="btn button1" to="/home">Submit </Link>
                </div>
            </form>
        );
    }
}


export default Login