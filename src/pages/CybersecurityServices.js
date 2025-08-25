// new-etsec/src/pages/CybersecurityServices.js
import React, { useState, useEffect } from "react";
import "./CybersecurityServices.css"; // Your external CSS
import GetStartedForm from "../components/GetStartedForm"; // NEW: Import the new form
import { serviceGroups } from "../data/servicesData"; // NEW: Import service data

const CyberSecurityServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGetStartedForm, setShowGetStartedForm] = useState(false); // NEW: State for the new form

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Find the service group relevant to this page
  const currentServiceGroup = serviceGroups.find(
    (group) => group.id === "cybersecurity"
  );

  const openGetStartedForm = () => setShowGetStartedForm(true);
  const closeGetStartedForm = () => setShowGetStartedForm(false);

  // Use the services from the centralized data for rendering
  const services = currentServiceGroup ? currentServiceGroup.services : [];

  return (
    <div className="cyber-container">
      {/* Enhanced Animated Background */}
      <div className="bg-animation">
        <div className="cyber-grid"></div>
        <div className="cyber-matrix">
          {[...Array(50)].map((_, i) => (
            <div key={i} className={`matrix-line matrix-line-${i}`}></div>
          ))}
        </div>
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
        <div className="cyber-waves">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`wave wave-${i}`}></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`header ${isVisible ? "fade-in" : ""}`}>
        <div className="header-content">
          <h1 className="main-title">
            <span className="shield-icon">🛡️</span>
            Cybersecurity Solutions
          </h1>
          <p className="subtitle">
            Comprehensive digital defense to protect enterprise infrastructure
          </p>
        </div>
      </header>

      {/* Call to Action Section - moved above services grid */}
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "2.5rem",
        }}
      >
        <h2
          style={{
            fontWeight: 600,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            color: "#0ff",
            textShadow: "0 2px 16px #0ff6",
          }}
        >
          Ready to get started with cybersecurity?
        </h2>
        <button
          className="get-in-touch-btn"
          onClick={openGetStartedForm}
          style={{
            fontSize: "1.15rem",
            padding: "0.85em 2.2em",
            borderRadius: "2em",
            boxShadow: "0 4px 24px #0ff6",
            position: "relative",
            zIndex: 2,
          }}
        >
          <span>Get Started Now</span>
          <div className="btn-glow"></div>
          <div className="btn-circuit"></div>
        </button>
      </div>

      {/* Services Section */}
      <main className="services-main">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-item ${isVisible ? "slide-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-glow"></div>
              <div className="service-circuit">
                <div className="circuit-line circuit-line-1"></div>
                <div className="circuit-line circuit-line-2"></div>
                <div className="circuit-line circuit-line-3"></div>
              </div>
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    {service.icon || currentServiceGroup.icon}
                  </div>
                  <div className="icon-pulse-ring"></div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description || "Details coming soon."}
                </p>
                {/* Individual "Get In Touch" buttons are removed */}
              </div>
              <div className="service-scanner"></div>
            </div>
          ))}
        </div>
      </main>

      {/* NEW: Render the centralized GetStartedForm */}
      {showGetStartedForm && (
        <GetStartedForm
          isOpen={showGetStartedForm}
          onClose={closeGetStartedForm}
          initialGroup={currentServiceGroup ? currentServiceGroup.id : ""}
        />
      )}
    </div>
  );
};

export default CyberSecurityServices;
