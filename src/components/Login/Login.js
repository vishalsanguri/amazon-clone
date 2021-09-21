import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Amazonimg from "../Assests/icons/amazon-logo.png";
import "./Login.css";
import Spinner from "../spinner/Spinner";

export default function Login({ confirm, setConfirm, userInfo, setUserInfo }) {
  const history = useHistory();
  const [spinner, setSpinner] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  function setData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setDetails({ ...details, [name]: value });
  }
  function signUpRedirect() {
    history.push("/register");
  }

  async function verifyUser() {
    if (details.email == "" || details.password === "") {
      window.alert("Plz fill details");
      return null;
    } else setSpinner(true);
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
    })
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        } else {
          console.log("hi");
          return [false];
        }
      })
      .then(([data]) => {
        console.log(data);
        if (data === false) {
          setSpinner(false);
          window.alert("incorrect credentials");
          return data;
        } else {
          setSpinner(false);
          setUserInfo({
            ...userInfo,
            ...{ name: data.name, location: data.location },
          });
          setConfirm({ ...confirm, ok: true });
          return data;
        }
      });
  }
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
        <div className="continue-btn" onClick={verifyUser}>
          Continue
        </div>
        <span style={{ fontSize: ".9rem" }}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </span>
        <div style={{ textAlign: "center" }}>New to Amazon ?</div>
        <div className="register" onClick={signUpRedirect}>
          Create Account
        </div>
        {spinner ? <Spinner /> : null}
      </div>
    </div>
  );
}
