import React, { useState, useEffect } from "react";
import "./VAPTServices.css";
import { Star, Shield, Target, Lock, Search, AlertTriangle, CheckCircle } from "lucide-react";

const VAPTServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Search className="feature-icon" />,
      title: "Comprehensive Vulnerability Assessment",
      description: "Systematic identification and classification of security vulnerabilities across your entire digital infrastructure."
    },
    {
      icon: <Target className="feature-icon" />,
      title: "Advanced Penetration Testing",
      description: "Ethical hacking techniques to exploit identified vulnerabilities and assess real-world security impact."
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Risk-Based Analysis",
      description: "Prioritized recommendations based on business impact and exploitability to optimize security investments."
    },
    {
      icon: <AlertTriangle className="feature-icon" />,
      title: "Threat Modeling",
      description: "Identification of potential attack vectors and threat scenarios specific to your business environment."
    }
  ];

  const benefits = [
    "Identify critical vulnerabilities before attackers do",
    "Comply with industry security standards and regulations",
    "Reduce risk of data breaches and cyber attacks",
    "Improve overall security posture and resilience",
    "Gain actionable insights for security improvements",
    "Validate existing security controls effectiveness"
  ];

  return (
    <div className={`vapt-container ${isVisible ? 'visible' : ''}`}>
      {/* Background Animation */}
      <div className="vapt-bg-animation">
        <div className="cyber-particles"></div>
      </div>

      {/* Hero Section */}
      <section className="vapt-hero">
        <div className="vapt-hero-content">
          <div className="vapt-hero-left">
            <h1 className="vapt-hero-title">
              VULNERABILITY ASSESSMENT AND PENETRATION TESTING
            </h1>
            
            <div className="vapt-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <span className="rating-text">4.9/5 - BASED ON 113 REVIEWS</span>
            </div>

            <p className="vapt-hero-description">
              Protect your business with comprehensive vulnerability assessments and penetration testing. 
              Our expert security professionals identify weaknesses before malicious actors can exploit them.
            </p>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="vapt-features">
        <div className="container">
          <h2 className="section-title">Our VAPT Methodology</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="vapt-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-left">
              <h2 className="section-title">Why Choose Our VAPT Services?</h2>
              <p className="benefits-description">
                Our comprehensive vulnerability assessment and penetration testing services help organizations 
                identify, understand, and remediate security vulnerabilities before they can be exploited by malicious actors.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <CheckCircle className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefits-right">
              <div className="stats-container">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Successful VAPT Assessments</p>
                </div>
                <div className="stat-item">
                  <h3>99.9%</h3>
                  <p>Critical Vulnerabilities Identified</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Security Monitoring Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="vapt-process">
        <div className="container">
          <h2 className="section-title">Our VAPT Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Planning & Reconnaissance</h3>
              <p>Define scope, gather intelligence, and understand the target environment.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Vulnerability Scanning</h3>
              <p>Automated and manual scanning to identify potential security weaknesses.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Exploitation & Testing</h3>
              <p>Attempt to exploit identified vulnerabilities to assess real impact.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Reporting & Remediation</h3>
              <p>Detailed report with findings, risk ratings, and remediation recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vapt-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your Business?</h2>
            <p>Get started with a comprehensive VAPT assessment today and protect your organization from cyber threats.</p>
            <button className="cta-button" onClick={() => window.location.href = '/contact'}>
              Get Your VAPT Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VAPTServices;
