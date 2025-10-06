import React, { useEffect, useState } from "react";
import "./Home.css"; // Import your CSS styles for the Home component
// Removed unused image import to fix lint warning
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    setIsLoaded(true); // Trigger fade-in animation for content
  }, []);

  const handleExploreServices = (path) => {
    // Navigates to a specific path provided by the service card
    navigate(path);
  };

  const handleGetStarted = () => {
    // Navigate to the standalone Get Started page and pass the group via query string
    navigate("/get-started?group=security-assessment");
  };

  const handleContactExperts = () => {
    // Example: Navigate to a dedicated contact page within your app
    navigate("/contact"); // Replace with your actual path
    console.log("Contact our experts");
  };

  const handleLearnMoreSOMA = () => {
    // Since 'https://etsecinc.com/cybersecurity-services/soma' is likely an external website,
    // we use window.open to open it in a new tab.
    window.open("https://etsecinc.com/cybersecurity-services/soma", "_blank");
    console.log("Learning more about SOMA on external site");
  };

  // Service categories for overview (simplified, as detailed services will be on a dedicated page)
  const serviceCategoriesOverview = [
    {
      icon: "🛡️",
      title: "Cyber Security Solutions",
      description: "Comprehensive security operations and threat management.",
      link: "/explorecyber",
    },
    {
      icon: "🛰️",
      title: "Satellite Security Services",
      description: "Specialized security for satellite and space systems.",
      link: "/satellite-security",
    },
    {
      icon: "⛓️",
      title: "Blockchain Solutions",
      description: "Secure blockchain and smart contract auditing.",
      link: "/blockchain-solution",
    },
  ];
  // ...existing code...
  // Key differentiators for expertise section
  const expertise = [
    {
      title: "Advanced Threat Detection",
      description:
        "Next-gen SOC capabilities with AI-powered threat intelligence",
      stat: "24/7",
    },
    {
      title: "Satellite Security Expertise",
      description: "Specialized knowledge in space-based systems and protocols",
      stat: "Unique",
    },
    {
      title: "Blockchain Auditing",
      description: "Smart contract and DeFi protocol security assessments",
      stat: "100%",
    },
  ];

  // Industry focus areas
  const industries = [
    {
      name: "Defense & Aerospace",
      description: "Satellite communications and defense systems security",
    },
    {
      name: "Financial Services",
      description: "Blockchain and traditional financial security",
    },
    {
      name: "Technology",
      description: "Advanced threat protection and SOC services",
    },
    {
      name: "Government",
      description: "Critical infrastructure and national security",
    },
  ];
  return (
    <div className="home">
      {/* Hero Section - Full Viewport */}
      <section className="hero-section">
        <div className="bg-animation">
          {/* Gradient Orbs */}
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />

          {/* Floating Particles - Only in Hero Section */}
          <div className="particles">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          {/* Mesh Grid */}
          <div className="mesh-grid" />
        </div>

        {/* Hero Content */}
        <div className={`content ${isLoaded ? "loaded" : ""}`}>
          <div className="hero-badge">
            <span className="badge-text">
              <span
                style={{
                  fontSize: "1.1em",
                  marginRight: "0.5em",
                  verticalAlign: "middle",
                }}
              >
                🛡️
              </span>
              Next-Generation Security Solutions
            </span>
          </div>

          <h1 className="hero-title">
            Securing the{" "}
            <span className="brand-highlight">
              Digital Frontier
              <div className="brand-glow" />
            </span>
          </h1>

          <div style={{ marginBottom: "2.2rem" }}>
            <span
              style={{
                fontSize: "1.35rem",
                color: "#00d4ff",
                fontWeight: 600,
                letterSpacing: "0.01em",
                textShadow: "0 2px 16px #0ff6",
              }}
            >
              Your trusted partner in cyber, satellite, and blockchain security.
            </span>
          </div>

          <p className="hero-subtitle" style={{ marginBottom: "3.5rem" }}>
            From traditional cybersecurity to satellite systems and blockchain
            protocols, we protect your most critical digital assets with
            cutting-edge solutions.
          </p>

          <div className="cta-container" style={{ marginBottom: "3.5rem" }}>
            <button className="cta-button primary" onClick={handleGetStarted}>
              <span className="button-text">Get Security Assessment</span>
              <div className="button-glow" />
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* This button explores all services, could go to a main services page */}
            <button
              className="cta-button secondary"
              onClick={() => navigate("/services")}
            >
              <span className="button-text">Explore Services</span>
              <svg className="play-icon" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="5,3 19,12 5,21"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          {/* Standalone page will handle rendering the form now */}

          <div className="stats-container" style={{ marginBottom: "2.5rem" }}>
            <div className="stat-item">
              <div className="stat-number">SOC</div>
              <div className="stat-label">24/7 Security Operations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">VAPT</div>
              <div className="stat-label">Vulnerability Assessment</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Primary Services Section --> */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Specialized services designed to protect your most critical assets
            from emerging threats.
          </p>
        </div>
        <div className="services-grid-featured">
          {/* Primary highlighted service — Web App VAPT */}
          <article
            className="service-card primary-highlight service-card-double"
            aria-labelledby="vapt-title"
          >
            <div className="service-card-content">
              <h3 id="vapt-title" className="service-card-title">
                Web App VAPT
              </h3>
              <p className="service-card-subtitle">
                Vulnerability Assessment & Penetration Testing
              </p>
              <p className="service-card-description">
                Identify and mitigate critical vulnerabilities in your web
                applications before attackers can exploit them.
              </p>
              <button
                className="cta-button primary"
                onClick={() => navigate("/vapt-services")}
              >
                Request VAPT
              </button>
            </div>
          </article>

          <article className="service-card" aria-labelledby="soma-title">
            <div className="service-card-content">
              <h3
                id="soma-title"
                className="service-card-title underline-title"
              >
                SOMA Framework
              </h3>
              <p className="service-card-subtitle">
                Space Attack Research & Tactics Analysis
              </p>
              <p className="service-card-description">
                Our cutting-edge framework for unparalleled space domain
                security analysis and defense.
              </p>
              <button
                className="cta-button secondary"
                onClick={handleLearnMoreSOMA}
              >
                Learn More
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="services-overview-section">
        <div className="section-header">
          <h2 className="section-title">Our Security Domains</h2>
          <p className="section-subtitle">
            Comprehensive protection across traditional cyber, satellite, and
            blockchain ecosystems
          </p>
        </div>

        <div className="services-grid">
          {serviceCategoriesOverview.map((category, index) => (
            <div
              key={index}
              className="service-category-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">{category.icon}</div>
              <h3 className="service-title">{category.title}</h3>
              <p className="service-description">{category.description}</p>
              {/* Using onClick to navigate to specific service page */}
              <button
                className="explore-service-btn"
                onClick={() => handleExploreServices(category.link)}
              >
                Explore Services
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose ETSEC</h2>
          <p className="section-subtitle">
            Specialized expertise in emerging security domains
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="expertise-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="expertise-stat">{item.stat}</div>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="section-header">
          <h2 className="section-title">Industries We Secure</h2>
          <p className="section-subtitle">
            Protecting critical infrastructure across key sectors
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="industry-content">
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container-main">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Secure Your Digital Assets?</h2>
            <p className="cta-subtitle">
              Get a comprehensive security assessment tailored to your specific
              needs.
              <br />
              From SOC setup to satellite security and blockchain audits.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={handleGetStarted}>
                <span className="button-text">Start Security Assessment</span>
                <div className="button-glow" />
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="cta-button secondary"
                onClick={handleContactExperts}
              >
                <span className="button-text">Contact Our Experts</span>
                <svg className="phone-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="cta-background-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
