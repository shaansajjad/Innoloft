import React from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-header">
        <div className="nav-title">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="nav-links">
        <a href="/">
          <i className="fa fa-globe" aria-hidden="true"></i>
          EN
        </a>
        <a href="/">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span className="notify" />
        </a>
        <a href="/">
          <i className="fa fa-bell" aria-hidden="true"></i>
          <span className="notify" />
        </a>
      </div>
    </div>
  );
}
