// new-etsec/src/components/Nabar.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import EtsecLogo from "../assets/ETSEC.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dimmed, setDimmed] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setDimmed(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => setDimmed(false);
  const handleMouseLeave = () => {
    if (window.scrollY > 60) setDimmed(true);
  };

  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <nav
      className={`navbar modern-navbar${dimmed ? " navbar-dimmed" : ""}`}
      ref={navbarRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link
            to="/"
            className="navbar-brand-logo"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={EtsecLogo}
              alt="ETSEC Cybersecurity Solutions Logo"
              className="navbar-logo-image"
            />
          </Link>
        </div>

        <div className="navbar-center">
          <div
            id="navbar-links"
            className={`navbar-links ${isOpen ? "active" : ""}`}
            aria-hidden={!isOpen}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={window.location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={
                window.location.pathname === "/services" ? "active-link" : ""
              }
            >
              Services
            </Link>
            <a
              href="https://etsecinc.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://etsecinc.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="navbar-cta-mobile"
            >
              ETSECInc.COM
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <a
            href="https://etsecinc.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="navbar-cta-btn desktop-only gradient"
          >
            ETSECInc.COM
          </a>

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
