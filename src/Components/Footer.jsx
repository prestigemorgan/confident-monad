import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
          <p className="footer-text">
            &copy; Prestige Morgan Financial Bank {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    );
    }