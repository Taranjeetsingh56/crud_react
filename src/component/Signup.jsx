/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    console.log("Signup Data:", signupData);

    // Store the signup data in local storage
    localStorage.setItem("signupData", JSON.stringify(signupData));

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="sign">
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact:
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={signupData.contact}
                  onChange={handleSignupChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
