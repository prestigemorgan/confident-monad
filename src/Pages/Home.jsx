import React from "react";
import "../Assets/Styles/home.css";
import checkImg from "../Assets/Images/middle-section/check.png";
import rateIcon from "../Assets/Images/middle-section/Rates-icon.png";
import atmIcon from "../Assets/Images/middle-section/credit-card.png";
import { Login } from "./Login";

export const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="top-section-1">
          <h1>Welcome to Prestige Morgan Financial Bank!</h1>
          <p>We're glad you are here!</p>
        </div>
        <div className="top-section-2">
          <Login />
        </div>
      </div>
      <div className="middle-section">
        <div>
          <img src={checkImg} alt="check-img" />
          <h2>Personal Check Reordering</h2>
          <p>Order checks now!</p>
          <button>Learn More</button>
        </div>
        <div>
          <img src={rateIcon} alt="rate-icon" />
          <h2>Take a look at our competitive rates!</h2>
          <p>Take a look at our competitive rates!</p>
          <button>Learn More</button>
        </div>
        <div>
          <img src={atmIcon} alt="atm-icon" />
          <h2>Debit Card</h2>
          <p>Tired of carrying cash? Get a Visa Debit Card for your account!</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="bottom-section">
        <h2>
          We have a full line of products and services for your banking needs.
        </h2>
        <p>
          Click on the links above to see some of our most popular products and
          to check our competitive rates.
        </p>
      </div>
      <div></div>
    </div>
  );
};
