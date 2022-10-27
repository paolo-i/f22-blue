import React from "react";
import "./SignInPage.css";

export default function Login(props) {
  return (
    <>
      <div className="parentContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/VanGogh-starry_night.jpg"
          alt=""
        />
        <div className="loginContainer">
          <h1>Welcome to Art Guardian</h1>
          <form className="loginForm">
            <div className="loginFormContent">
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
                <button type="button" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
