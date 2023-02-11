import React from "react";
import "../Assets/Styles/header.css";
import headerIcon from "../Assets/Images/pro-icon.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-details">
          <img src={headerIcon} alt="header-icon" className="header-icon" />
          <h1 className="header-title">
            Prestige Morgan
            <span>Financial Bank</span>
          </h1>
        </div>
        <div className="header-nav">
            <ul
              className="header-nav-list"
            >
                <li
                    className="list-item"
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                className="list-item"
                >
                    <Link to="/">About</Link>
                </li>
                <li
                className="list-item"
                >
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};
