import React from "react";
import "./SignInPage.css";
import "./RegistrationPage.js";
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <>
      <div className="parentContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/VanGogh-starry_night.jpg"
          alt=""
        />
        <div className="loginContainer">
          <div className="heading">
            <h1>Welcome to Art Guardian</h1>
          </div>
          <form className="loginForm">
            <h3 className="loginFormTitle">Sign In</h3>
            <div className="formInputs">
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p>Don't have an account?</p>
            <div className="d-grid gap-2 mt-3">
            <Link to="/RegistrationPage"><button type="button" className="btn btn-primary">
                Register
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
