import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Amazonimg from "../Assests/icons/amazon-logo.png";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [status, setstatus] = useState({ status: "" });
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    location: "",
  });
  function setData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setDetails({ ...details, [name]: value });
  }

  async function verifyUser() {
    var body = JSON.stringify({
      email: `${details.email}`,
      password: `${details.password}`,
    });
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    }).then((res) => setstatus({ ...status, status: res.status }));
  }
  if (status.status === 400) {
    window.alert("User don't exist");
  } else if (status.status === 200) {
    history.push("/");
  } else
    return (
      <div className="login-container">
        <img src={Amazonimg} alt="logo" />
        <div className="detail-container">
          <span style={{ fontSize: "1.3rem" }}>Sign-In</span>
          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              className="email-box"
              onChange={(e) => setData(e)}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              className="email-box"
              onChange={(e) => setData(e)}
            />
          </div>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              className="email-box"
              onChange={(e) => setData(e)}
            />
          </div>
          <div>
            <label>Your Location</label>
            <br />
            <input
              type="text"
              name="location"
              className="email-box"
              onChange={(e) => setData(e)}
            />
          </div>
          <div className="continue-btn" onClick={verifyUser}>
            Continue
          </div>
          <span style={{ fontSize: ".9rem" }}>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </span>
        </div>
      </div>
    );
}
