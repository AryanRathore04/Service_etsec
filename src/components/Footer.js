// new-etsec/src/components/Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import EtsecLogo from "../assets/ETSEC.png"; // Assuming ETSEC.png is in src/assets/

function Footer() {
  // ...existing code...

  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-section address">
          {/* Replace h3 with an img tag for the logo */}
          <img
            src={EtsecLogo}
            alt="ETSEC Inc. Logo"
            className="footer-logo-image"
          />
          {/* Remove the old text title */}
          {/* <h3>ETSEC Inc</h3> */}
          <p>
            Srinivasa Homes Apt, Flat No 401,
            <br />
            Bandari Layout Road No 4a,
            <br />
            Nizampet, Hyderabad, 500090
          </p>
          <p>📞 +91 8688578412</p>
          <p>📧 contact@etsecinc.com</p>
        </div>

        <div className="footer-section social-links">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://linkedin.com/company/etsecinc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
            <a
              href="https://x.com/etsecinc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/etsecinc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Instagram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="https://etsecinc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ETSECInc.com ↗
              </a>
            </li>
            <li>
              <a
                href="https://etsecinc.com/#about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us ↗
              </a>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <a
                href="https://etsecinc.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us↗
              </a>
            </li>
            <li>
              <Link to="/Terms">Terms & Conditions</Link>
            </li>
            <li>
              <a
                href="https://etsecinc.com/cybersecurity-services/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy ↗
              </a>
            </li>
            <li>
              <a
                href="https://etsecinc.com/cybersecurity-services/faqs.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQs ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 ETSEC Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
