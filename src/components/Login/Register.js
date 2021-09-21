import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import Amazonimg from "../Assests/icons/amazon-logo.png";
import "./Login.css";

export default function Register() {
  const history = useHistory();
  const [registersucess, setRegistersucess] = useState({ ok: "" });
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

  async function addUser() {
    if (
      details.email === "" ||
      details.password === "" ||
      details.name === "" ||
      details.location === ""
    ) {
      window.alert("plz fill all the fields");
    }
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
        name: details.name,
        location: details.location,
      }),
    }).then((res) => {
      setRegistersucess({ ...registersucess, ok: res.ok });
      setDetails({
        ...details,
        ...{
          email: "",
          password: "",
          name: "",
          location: "",
        },
      });
      if (res.ok === true) {
        history.push("/");
      }
    });
  }
  function logInRedirect() {
    history.push("/");
  }
  return (
    <div className="login-container">
      <img src={Amazonimg} alt="logo" />
      <div className="detail-container">
        <span style={{ fontSize: "1.3rem" }}>Sign-Up</span>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="email-box"
            value={details.email}
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
            value={details.password}
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
            value={details.name}
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
            value={details.location}
            onChange={(e) => setData(e)}
          />
        </div>
        <div className="continue-btn" onClick={addUser}>
          Create
        </div>
        <div style={{ textAlign: "center" }}>Have an Account ?</div>
        <div className="register" onClick={logInRedirect}>
          Log In
        </div>
      </div>
    </div>
  );
}
