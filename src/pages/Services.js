// new-etsec/src/pages/Services.js
import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Cyber Security Solutions",
      items: [
        "SOC Setup & Management",
        "Network Operations & Monitoring",
        "VAPT",
        "Threat Intelligence & Reporting",
        "Malware Analysis & Forensics",
        "Blue Teaming Solutions",
      ],
      icon: "🛡️",
      className: "cyber-security",
      link: "/explorecyber",
    },
    {
      title: "Satellite Security Services",
      items: [
        "Satelite Protocol VAPT",
        "Secure Code Analysis",
        "Cyber Architecture",
        "Ground Station Auditing",
        "Ground Station VAPT",
      ],
      icon: "🛰️",
      className: "satellite-security",
      link: "/satellite-security",
    },
    {
      title: "Blockchain Solutions",
      items: [
        "Smart Contract VAPT",
        "Blockchain Protocol Auditing",
        "Network Infrastructure Auditing",
      ],
      icon: "⛓️",
      className: "blockchain-solution",
      link: "/blockchain-solution",
    },
    {
      title: "Secure Web Development",
      items: [
        "Data Encryption",
        "Authentication & Authorization",
        "Secure Coding Practices",
        "API Security",
        "Database Security",
      ],
      icon: "🔐",
      className: "secure-web-development",
      link: "/secure-web-development",
    },
  ];

  const handleButtonClick = (url) => {
    const isExternal = url.startsWith("http://") || url.startsWith("https://");
    if (isExternal) {
      window.open(url, "_blank");
    } else {
      navigate(url);
    }
  };

  const handleComingSoon = () => {
    navigate("/coming-soon");
  };

  return (
    <div className="services-container">
      <div className="background-effects">
        <div className="bg-blur bg-blur-1"></div>
        <div className="bg-blur bg-blur-2"></div>
        <div className="bg-blur bg-blur-3"></div>
      </div>

      <div className="services-wrapper">
        <div className="services-header">
          <div className="premium-badge">
            <div className="badge-inner">
              <span className="badge-text">Premium Services</span>
            </div>
          </div>

          <h1 className="main-title">
            Our <span className="title-gradient">Services</span>
          </h1>

          <p className="main-description">
            Next-generation security solutions powered by cutting-edge
            technology to safeguard your digital ecosystem
          </p>

          <div className="title-divider">
            <div className="divider-line divider-left"></div>
            <div className="divider-dot"></div>
            <div className="divider-line divider-right"></div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className={`service-card ${service.className}`}>
              <div className="card-border"></div>
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="service-icon-wrapper">
                  <div className="icon-glow"></div>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h2 className="service-title">{service.title}</h2>

                {/* ✅ ADDED DESCRIPTION BASED ON SERVICE TYPE */}
                {service.title === "Cyber Security Solutions" && (
                  <p className="service-description">
                    Protect your digital infrastructure with end-to-end
                    cybersecurity services including proactive threat detection,
                    secure network operations, deep malware analysis, and
                    effective incident response strategies.
                  </p>
                )}
                {service.title === "Satellite Security Services" && (
                  <p className="service-description">
                    Ensure the security of satellite communication and
                    infrastructure with specialized services like secure code
                    auditing, satellite VAPT protocols, and cybersecurity
                    architecture for ground stations.
                  </p>
                )}
                {service.title === "Blockchain Solutions" && (
                  <p className="service-description">
                    Secure your decentralized applications and blockchain
                    protocols with smart contract audits, protocol vulnerability
                    assessment, and complete infrastructure security for Web3
                    and beyond.
                  </p>
                )}
                {service.title === "Secure Web Development" && (
                  <p className="service-description">
                    Build secure, robust web applications with comprehensive
                    security measures including data encryption, authentication
                    systems, secure coding practices, and vulnerability
                    prevention from the ground up.
                  </p>
                )}

                {/*  <ul className="service-list">
                  {service.items.map((item, index) => (
                    <li key={index} className="service-item">
                      <div className="item-dot"></div>
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
*/}
                <button
                  className="service-button"
                  onClick={() => handleButtonClick(service.link)}
                >
                  <span className="button-text">Explore Service</span>
                  <div className="button-overlay"></div>
                </button>
              </div>
              <div className="card-corner"></div>
              <div className="card-bottom-line"></div>
              <div className="floating-particle particle-1"></div>
              <div className="floating-particle particle-2"></div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h3 className="cta-title">
                Ready to <span className="cta-gradient">Secure</span> Your
                Future?
              </h3>
              <p className="cta-description">
                Join the next generation of cybersecurity with our expert team
                and cutting-edge solutions
              </p>
              <div className="cta-buttons">
                <button className="cta-primary" onClick={handleComingSoon}>
                  <span className="cta-primary-text">Start Your Journey</span>
                  <div className="cta-primary-overlay"></div>
                </button>
                <button className="cta-secondary" onClick={handleComingSoon}>
                  View Portfolio
                  <span className="cta-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="cta-border-top"></div>
            <div className="cta-border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
