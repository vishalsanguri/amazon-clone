import React from "react";
import "./Footer.css";

export default function Footer({ scroll }) {
  return (
    <div className="footer-container">
      <div onClick={scroll} style={{ cursor: "pointer" }}>
        Back To Top
      </div>
      <br />
      <div className="sections">
        <div className="section-content">
          <h4 style={{ color: "red" }}>Get To Know Us</h4>
          <span>About us</span>
          <span>Careers</span>
          <span>Press Releases</span>
        </div>
        <div className="section-content">
          <h4 style={{ color: "red" }}>Connect with Us</h4>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
        <div className="section-content">
          <h4 style={{ color: "red" }}>Make Money with Us</h4>
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span>Become an Affiliate</span>
        </div>
      </div>
      <br />
      <hr />
      <div>Designed by Vishal Sanguri</div>
    </div>
  );
}
