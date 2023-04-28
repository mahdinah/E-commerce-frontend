import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footsec">
        <div className="sec1foot">
          <Link to="/" className="navbar-brand">
            <div class="logo-holder logo-6">
              <a href="/">
                <h3>
                  A<span>Von</span>
                </h3>
              </a>
            </div>{" "}
          </Link>
        </div>
        <div className="sec2foot">
          <ul className="footerul">
            <li className="liheader">
              <Link to="/shipping">Main Menu</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="sec3foot">
          <ul className="footerul">
            <li className="liheader">
              <Link to="/shipping">Accounts</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="sec4foot">
          <ul className="footerul">
            <li className="liheader">
              <Link to="/shipping">Shipping & Payments</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/returns">Returns</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="sec5foot">
          <form>
            <label className="labelfoot" htmlFor="email">
              Subscribe to our newsletter:
            </label>
            <input
              className="inputfoot"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button className="submitfoot" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footcopyright">© 2023 Avon. All rights reserved.</div>
    </div>
  );
};

export default Footer;
