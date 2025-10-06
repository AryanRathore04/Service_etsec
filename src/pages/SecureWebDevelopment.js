import React, { useState, useEffect } from "react";
import "./SecureWebDevelopment.css";
import GetStartedForm from "../components/GetStartedForm";
import { Shield, Lock, Key, Code, Database, UserCheck } from "lucide-react";

const SecureWebDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGetStartedForm, setShowGetStartedForm] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openGetStartedForm = () => setShowGetStartedForm(true);
  const closeGetStartedForm = () => setShowGetStartedForm(false);

  const features = [
    {
      icon: <Lock className="feature-icon" />,
      title: "Data Encryption",
      description:
        "End-to-end encryption protocols to protect sensitive data both in transit and at rest, ensuring comprehensive data security throughout your application.",
    },
    {
      icon: <UserCheck className="feature-icon" />,
      title: "Authentication & Authorization",
      description:
        "Robust authentication systems with multi-factor authentication, role-based access control, and secure session management to protect user accounts.",
    },
    {
      icon: <Code className="feature-icon" />,
      title: "Secure Coding Practices",
      description:
        "Implementation of industry-standard secure coding practices, code reviews, and vulnerability assessments to prevent common security flaws.",
    },
  ];

  return (
    <div className="secure-web-container">
      {/* Enhanced Animated Background */}
      <div className="bg-animation">
        <div className="secure-grid"></div>
        <div className="secure-matrix">
          {[...Array(40)].map((_, i) => (
            <div key={i} className={`matrix-line matrix-line-${i}`}></div>
          ))}
        </div>
        <div className="floating-particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
        <div className="secure-waves">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`wave wave-${i}`}></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <header className={`header ${isVisible ? "fade-in" : ""}`}>
        <div className="header-content">
          <h1 className="main-title">
            <Shield className="shield-icon" />
            Secure Web Development
          </h1>
          <p className="subtitle">
            Building robust, secure web applications that protect your business
            and users from evolving cyber threats
          </p>
          <div className="intro-section">
            <p className="intro-text">
              In today's digital landscape, security isn't an afterthought—it's
              a fundamental requirement. Modern web applications handle
              sensitive data, financial transactions, and personal information,
              making them prime targets for cyber attacks. Our secure web
              development practices ensure your applications are built with
              security at their core, protecting against vulnerabilities from
              day one and maintaining user trust through robust protection
              measures.
            </p>
          </div>
        </div>
      </header>

      {/* Call to Action Section */}
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
          Ready to build secure web applications?
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

      {/* Features Section */}
      <main className="features-main">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${isVisible ? "slide-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-glow"></div>
              <div className="feature-circuit">
                <div className="circuit-line circuit-line-1"></div>
                <div className="circuit-line circuit-line-2"></div>
                <div className="circuit-line circuit-line-3"></div>
              </div>
              <div className="feature-content">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-container">{feature.icon}</div>
                  <div className="icon-pulse-ring"></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-scanner"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Additional Security Features Section */}
      <section className="additional-features">
        <div className="container">
          <h2 className="section-title">
            Comprehensive Security Implementation
          </h2>
          <div className="security-grid">
            <div className="security-item">
              <Database className="security-icon" />
              <h3>Secure Database Design</h3>
              <p>
                Protected database architectures with encryption, access
                controls, and SQL injection prevention.
              </p>
            </div>
            <div className="security-item">
              <Shield className="security-icon" />
              <h3>API Security</h3>
              <p>
                Secure API development with authentication tokens, rate
                limiting, and data validation.
              </p>
            </div>
            <div className="security-item">
              <Key className="security-icon" />
              <h3>Identity Management</h3>
              <p>
                Advanced user identity management with secure password policies
                and access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Standards Section */}
      <section className="standards-section">
        <div className="container">
          <div className="standards-content">
            <div className="standards-left">
              <h2 className="section-title">
                Industry-Leading Security Standards
              </h2>
              <p className="standards-description">
                We follow the latest security frameworks and compliance
                requirements to ensure your web applications meet the highest
                security standards and regulatory requirements.
              </p>
              <div className="standards-list">
                <div className="standard-item">
                  <span className="standard-badge">OWASP</span>
                  <span>Top 10 Security Practices</span>
                </div>
                <div className="standard-item">
                  <span className="standard-badge">GDPR</span>
                  <span>Data Protection Compliance</span>
                </div>
                <div className="standard-item">
                  <span className="standard-badge">ISO 27001</span>
                  <span>Information Security Management</span>
                </div>
                <div className="standard-item">
                  <span className="standard-badge">PCI DSS</span>
                  <span>Payment Card Security</span>
                </div>
              </div>
            </div>
            {/* Right column stats commented out for now. */}
            {false && (
              <div className="standards-right">
                <div className="security-stats">
                  <div className="stat-item">
                    <h3>99.9%</h3>
                    <p>Security Vulnerability Prevention</p>
                  </div>
                  <div className="stat-item">
                    <h3>100+</h3>
                    <p>Secure Applications Delivered</p>
                  </div>
                  <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Security Monitoring</p>
                  </div>
                </div>
              </div>
            )}

            {/* New simplified single-column CTA */}
            <div className="standards-cta">
              <h3>Ready for a security-first web app?</h3>
              <p>
                Book an architectural review or request a secure development
                proposal tailored to your needs.
              </p>
              <button
                className="standards-cta-btn"
                onClick={openGetStartedForm}
              >
                Request Secure Development
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GetStartedForm Modal */}
      {showGetStartedForm && (
        <GetStartedForm
          isOpen={showGetStartedForm}
          onClose={closeGetStartedForm}
          initialGroup="secure-web-development"
        />
      )}
    </div>
  );
};

export default SecureWebDevelopment;
