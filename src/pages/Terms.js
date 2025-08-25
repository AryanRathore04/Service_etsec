import React, { useEffect, useRef } from 'react';

const Terms = () => {
  const particlesRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('fade-in-section');
        observer.observe(section);
      }
    });

    // Dynamic particle generation
    const createParticle = () => {
      if (particlesRef.current) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesRef.current.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 12000);
      }
    };

    // Create new particles periodically
    const particleInterval = setInterval(createParticle, 3000);

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(particleInterval);
    };
  }, []);

  const handleEmphasisHover = (e, isEnter) => {
    if (isEnter) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.textShadow = '0 4px 8px rgba(0, 212, 255, 0.3)';
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.textShadow = 'none';
    }
  };

  return (
    <div className="terms-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .terms-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          color: #e5e5e5;
          line-height: 1.7;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Animated background particles */
        .bg-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 212, 255, 0.3);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 8s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 1s; animation-duration: 6s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 2s; animation-duration: 10s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 0.5s; animation-duration: 7s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 1.5s; animation-duration: 9s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 2.5s; animation-duration: 5s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 0.8s; animation-duration: 8s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 3s; animation-duration: 6s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 1.2s; animation-duration: 11s; }

        @keyframes float {
          0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        /* Cyber grid overlay */
        .cyber-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          opacity: 0.1;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          border-bottom: 1px solid #333;
          padding-bottom: 2rem;
          padding-top: 5rem; /* Added padding-top */
          opacity: 1; /* Ensure it's visible */
          transform: translateY(0); /* Reset transform */
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header h1 {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.3));
          }
          to {
            filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6));
          }
        }

        .company-name {
          font-size: 1.5rem;
          color: #00d4ff;
          font-weight: 600;
          margin-bottom: 0.5rem;
          animation: slideInLeft 1s ease-out 0.3s both;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .subtitle {
          font-size: 1.1rem;
          color: #888;
          max-width: 600px;
          margin: 0 auto;
          animation: slideInRight 1s ease-out 0.6s both;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Cyber icon for header */
        .header::before {
          content: '🛡️';
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
          animation: pulse 2s infinite, rotate 10s linear infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .terms-content {
          display: grid;
          gap: 3rem;
        }

        .section {
          border-left: 3px solid #00d4ff;
          padding-left: 2rem;
          position: relative;
          animation: slideInFromLeft 0.8s ease-out;
          animation-fill-mode: both;
        }

        .section:nth-child(1) { animation-delay: 0.1s; }
        .section:nth-child(2) { animation-delay: 0.2s; }
        .section:nth-child(3) { animation-delay: 0.3s; }
        .section:nth-child(4) { animation-delay: 0.4s; }
        .section:nth-child(5) { animation-delay: 0.5s; }
        .section:nth-child(6) { animation-delay: 0.6s; }
        .section:nth-child(7) { animation-delay: 0.7s; }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .section::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #00d4ff;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
            transform: scale(1.2);
          }
        }

        /* Cyber icons for each section */
        .section::after {
          position: absolute;
          left: -25px;
          top: 0.5rem;
          font-size: 1.5rem;
          animation: bounce 2s infinite;
        }

        .section:nth-child(1)::after { content: '💻'; }
        .section:nth-child(2)::after { content: '🤝'; }
        .section:nth-child(3)::after { content: '🔒'; }
        .section:nth-child(4)::after { content: '💳'; }
        .section:nth-child(5)::after { content: '⚠️'; }
        .section:nth-child(6)::after { content: '🤐'; }
        .section:nth-child(7)::after { content: '⚡'; }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .section-title:hover {
          color: #00d4ff;
          transform: translateX(10px);
        }

        .section-number {
          color: #00d4ff;
          font-weight: 800;
          margin-right: 0.5rem;
          display: inline-block;
          animation: numberGlow 3s ease-in-out infinite;
        }

        @keyframes numberGlow {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
          }
          50% { 
            text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
          }
        }

        .section-content {
          font-size: 1.1rem;
          color: #cccccc;
          margin-bottom: 1.5rem;
        }

        .subsection {
          margin: 1.5rem 0;
        }

        .subsection-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #00d4ff;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .subsection-title:hover {
          transform: translateX(5px);
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        .subsection-title::before {
          content: '▸';
          margin-right: 0.5rem;
          color: #00d4ff;
          animation: arrow-pulse 1.5s ease-in-out infinite;
        }

        @keyframes arrow-pulse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .bullet-list {
          list-style: none;
          padding-left: 1rem;
        }

        .bullet-list li {
          margin: 0.8rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .bullet-list li::before {
          content: '•';
          color: #00d4ff;
          font-weight: bold;
          position: absolute;
          left: 0;
          top: 0;
        }

        .emphasis {
          font-weight: 600;
          color: #ffffff;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .highlight {
          background: rgba(0, 212, 255, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          color: #00d4ff;
          position: relative;
          transition: all 0.3s ease;
        }

        .highlight:hover {
          background: rgba(0, 212, 255, 0.2);
          transform: scale(1.05);
        }

        .footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
          text-align: center;
          color: #666;
          animation: fadeIn 1s ease-out 1s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .last-updated {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 1rem;
        }

        /* Cyber lines animation */
        .cyber-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00d4ff, transparent);
          animation: scan 3s linear infinite;
        }

        .cyber-line-1 {
          top: 20%;
          left: 0;
          right: 0;
          animation-delay: 0s;
        }

        .cyber-line-2 {
          top: 60%;
          left: 0;
          right: 0;
          animation-delay: 1.5s;
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        /* Mobile responsiveness updates */
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          .header h1 {
            font-size: 2.2rem;
          }

          .company-name {
            font-size: 1.3rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .section {
            padding-left: 1.5rem;
          }

          .section::after {
            left: -20px;
            font-size: 1.2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .section-content {
            font-size: 1rem;
          }

          .subsection-title {
            font-size: 1.2rem;
          }

          .terms-content {
            gap: 2rem;
          }
          
          .cyber-grid {
            background-size: 30px 30px;
          }
          
          .header::before {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.5rem;
          }

          .header {
            margin-bottom: 2rem;
          }

          .header h1 {
            font-size: 1.8rem;
          }

          .section {
            padding-left: 1rem;
            border-left-width: 2px;
          }

          .section::before {
            width: 8px;
            height: 8px;
            left: -4px;
          }

          .section::after {
            display: none;
          }

          .section-title {
            font-size: 1.3rem;
          }

          .bullet-list {
            padding-left: 0.5rem;
          }
          
          .particle {
            display: none;
          }
        }

        /* Intersection Observer Animation */
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Selection styling */
        ::selection {
          background: rgba(0, 212, 255, 0.3);
          color: #ffffff;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #00d4ff;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0099cc;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="bg-particles" ref={particlesRef}>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="cyber-grid"></div>
      
      <div className="cyber-line cyber-line-1"></div>
      <div className="cyber-line cyber-line-2"></div>

      <div className="container">
        <div className="header">
          <div className="company-name">ETSEC Cybersecurity Services</div>
          <h1>Terms and Conditions</h1>
          <p className="subtitle">Please read these terms and conditions carefully before engaging with our cybersecurity solutions, consulting, and related services.</p>
        </div>

        <div className="terms-content">
          <div className="section" ref={el => sectionsRef.current[0] = el}>
            <h2 className="section-title">
              <span className="section-number">1.1</span>Introduction
            </h2>
            <div className="section-content">
              Welcome to <span className="emphasis" onMouseEnter={(e) => handleEmphasisHover(e, true)} onMouseLeave={(e) => handleEmphasisHover(e, false)}>ETSEC Cybersecurity Services</span>. These Terms and Conditions ("Terms") govern the provision and your use of our cybersecurity solutions, consulting, and related services. By engaging with our services, you agree to comply with and be bound by these Terms. Specific service details, scope, and deliverables will be further outlined in a separate <span className="highlight">Statement of Work (SOW)</span> or formal contract.
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[1] = el}>
            <h2 className="section-title">
              <span className="section-number">1.2</span>Client Responsibilities
            </h2>
            <div className="section-content">
              <div className="subsection">
                <h3 className="subsection-title">Cooperation</h3>
                <p>You agree to provide timely access to necessary systems, information, and personnel as required for the efficient and effective delivery of our services.</p>
              </div>
              
              <div className="subsection">
                <h3 className="subsection-title">Accuracy of Information</h3>
                <p>You are responsible for the accuracy and completeness of all data and information provided to ETSEC for the purpose of service delivery.</p>
              </div>
              
              <div className="subsection">
                <h3 className="subsection-title">Compliance</h3>
                <p>You shall ensure that your use of our services complies with all applicable laws, regulations, and industry standards.</p>
              </div>
              
              <div className="subsection">
                <h3 className="subsection-title">Misuse</h3>
                <p>You agree not to misuse any insights, tools, or information gained from our services for illegal or unethical activities.</p>
              </div>
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[2] = el}>
            <h2 className="section-title">
              <span className="section-number">1.3</span>Intellectual Property
            </h2>
            <div className="section-content">
              All methodologies, proprietary tools, frameworks, reports, templates, and guides developed or utilized by <span className="emphasis" onMouseEnter={(e) => handleEmphasisHover(e, true)} onMouseLeave={(e) => handleEmphasisHover(e, false)}>ETSEC</span> in the delivery of its cybersecurity services remain the <span className="highlight">exclusive intellectual property of ETSEC</span>. Any deliverable specifically created for you under a paid engagement will be licensed for your internal use as stipulated in the respective service contract. Unauthorized use, copying, or redistribution is prohibited.
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[3] = el}>
            <h2 className="section-title">
              <span className="section-number">1.4</span>Payments & Refunds
            </h2>
            <div className="section-content">
              <div className="subsection">
                <h3 className="subsection-title">Fees</h3>
                <p>Fees for cybersecurity services are typically outlined in the service proposal and formal contract, and must be paid as per the agreed-upon schedule (e.g., upfront, milestones, monthly retainer).</p>
              </div>
              
              <div className="subsection">
                <h3 className="subsection-title">Refund Policy</h3>
                <p>Due to the nature of specialized consulting and service delivery, <span className="emphasis" onMouseEnter={(e) => handleEmphasisHover(e, true)} onMouseLeave={(e) => handleEmphasisHover(e, false)}>no refunds for services will be issued after initiation or delivery</span>, unless explicitly stated and agreed upon in a specific service contract. Any unique refund or credit terms will be clearly documented in your individual service agreement.</p>
              </div>
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[4] = el}>
            <h2 className="section-title">
              <span className="section-number">1.5</span>Limitation of Liability
            </h2>
            <div className="section-content">
              ETSEC shall not be held responsible for any damage, loss, or incident (including but not to direct, indirect, incidental, consequential, special, or punitive damages, loss of profits, data, or business interruption) resulting from the use or inability to use our services, or from security incidents, unless proven to be due to <span className="highlight">ETSEC's gross negligence or willful misconduct</span>. Our liability will, in all cases, be limited to the fees paid for the specific service from which the claim arises.
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[5] = el}>
            <h2 className="section-title">
              <span className="section-number">1.6</span>Confidentiality
            </h2>
            <div className="section-content">
              Both parties agree to keep all confidential information received from the other party in connection with the services <span className="emphasis" onMouseEnter={(e) => handleEmphasisHover(e, true)} onMouseLeave={(e) => handleEmphasisHover(e, false)}>strictly confidential</span>, using it only for the purposes of the engagement. This obligation survives the termination of services.
            </div>
          </div>

          <div className="section" ref={el => sectionsRef.current[6] = el}>
            <h2 className="section-title">
              <span className="section-number">1.7</span>Termination
            </h2>
            <div className="section-content">
              We reserve the right to terminate or suspend services immediately if you violate these Terms, fail to make timely payments, or engage in any activity that compromises our ability to provide services or poses a legal risk. Termination clauses, including <span className="highlight">notice periods and outstanding payment obligations</span>, will be detailed in individual service contracts.
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="last-updated">Last updated: June 2025</div>
          {/* <p>&copy; 2025 ETSEC Cybersecurity Services. All rights reserved.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Terms;