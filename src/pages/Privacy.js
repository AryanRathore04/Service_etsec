import React, { useState, useEffect } from 'react';
import { Shield, ArrowUp, Mail } from 'lucide-react';
import './Privacy.css'; // Import the external CSS file for the React page's layout

const Privacy = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button based on parent page scroll
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="privacy-policy-container">
      {/* Background Particles (Optional, keep if desired) */}
      <div className="background-particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Header for the React page */}
      <header className="header">
        <div className="header-icon">
          <Shield size={40} />
        </div>
        <h1 className="main-title">Privacy Policy</h1>
        <p className="subtitle">ETSEC Cybersecurity Services</p>
        <p className="last-updated">Last Updated: June 20, 2025</p>
      </header>

      {/* Main Content Area - This is where the Iframe will live */}
      <main className="content">
        <div className="iframe-wrapper">
          {/* The iframe loads the external privacy policy page */}
          <iframe
            src="https://etsecinc.com/cybersecurity-services/privacy-policy.html"
            title="ETSEC Cybersecurity Services Privacy Policy"
            className="privacy-iframe"
            frameBorder="0" // Removes the default iframe border
            allowFullScreen // Allows the iframe content to go fullscreen if supported
          ></iframe>
        </div>

        {/* Contact Section - This section remains part of your React page's styling */}
        <div className="contact-section">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Questions About Our Privacy Practices?</h3>
          <p style={{ marginBottom: '1rem', color: '#cccccc' }}>
            To exercise any of these rights, or for any questions regarding our data practices, please contact us:
          </p>
          <a href="mailto:contact@etsecinc.com" className="contact-email">
            <Mail size={20} />
            contact@etsecinc.com
          </a>
        </div>
      </main>

      {/* Back to Top Button - This also remains part of your React page's styling */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Privacy;