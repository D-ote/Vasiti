import React from "react";
import "./BottomFooter.css";

export const BottomFooter = () => {
  return (
    <div className="footer-bottom-div d-flex align-items-top">
      <ul className="links">
        <li>
          <b>Company</b>
        </li>
        <li>About us</li>
        <li>Term of Use</li>
        <li>Privacy Policy</li>
        <li>Press & Media</li>
      </ul>
      <ul className="links">
        <li>
          <b>Products</b>
        </li>
        <li>Marketplace</li>
        <li>Magazine</li>
        <li>Seller</li>
        <li>Seller</li>
        <li>Services</li>
      </ul>
      <ul className="links">
        <li>
          <b>Careers</b>
        </li>
        <li>Become a Campus Rep</li>
        <li>Become a Vasiti Influencer</li>
        <li>Become a Campus writer</li>
        <li>Become an Affiliate</li>
      </ul>
      <ul className="links">
        <li>
          <b>Get in touch</b>
        </li>
        <li>Contact us</li>
        <li>Partner with us</li>
        <li>Advertise with us</li>
        <li>Help/FAQs</li>
      </ul>
      <div className="community mt-4">
        <h6>Join our community</h6>
        <ul className="social-icons">
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-instagram"></i>
          </li>
          <li>
            <i className="bi bi-twitter"></i>
          </li>
          <li>
            <i className="bi bi-linkedin"></i>
          </li>
        </ul>
        <a href="https://">Email Newsletter</a>
      </div>
    </div>
  );
};
