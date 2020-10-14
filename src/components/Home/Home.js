import React from "react";
import Tabs from "../tab/Tabs";
import "./Home.css";

export default function Home() {
  return (
    <div className="home flex">
      <div className="left">
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home" aria-hidden="true"></i>Home
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-bullhorn" aria-hidden="true"></i>My Account
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-building" aria-hidden="true"></i>My Company
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-cog" aria-hidden="true"></i>My Settings
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>News
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-area-chart" aria-hidden="true"></i>Analytics
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <Tabs>
          <div label="Main Information">Form Fields Here</div>
          <div label="Additional Information">Form Fields Here</div>
        </Tabs>
      </div>
    </div>
  );
}
