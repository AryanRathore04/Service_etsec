import React, { useState, useEffect } from 'react';
import { HelpCircle, Shield, Settings, Clock, Lock, Package, ChevronDown, ChevronUp } from 'lucide-react';

// Move faqData outside the component to avoid recreating it on every render
const faqData = [
    {
      id: 1,
      question: "What cybersecurity services does ETSEC offer?",
      answer: `ETSEC offers a comprehensive suite of enterprise-grade cybersecurity services designed to protect your organization's digital assets. Our core offerings include:

• Security Operations Center (SOC) setup, co-management, and fully managed services
• Advanced Network Monitoring & Detection
• Vulnerability Assessment and Penetration Testing (VAPT) for Web applications, Mobile applications, and IT Infrastructure
• Proactive Threat Intelligence & Hunting
• Malware Forensics & Reverse Engineering
• Custom Open Source Intelligence (OSINT) investigations
• Incident Response Planning & Execution`,
      icon: <Shield className="w-6 h-6" />,
      category: "Services"
    },
    {
      id: 2,
      question: "How does the engagement process work for cybersecurity services?",
      answer: `Our engagement process is structured for clarity and efficiency:

1. Initial Inquiry: You reach out to us with your cybersecurity needs.

2. Scoping Call: We conduct a detailed discussion to understand your specific requirements, infrastructure, and objectives.

3. Proposal & Quotation: Based on the scoping call, we provide a tailored service proposal and a transparent quotation.

4. NDA & Contract Signing: Upon agreement, we sign comprehensive Non-Disclosure Agreements (NDAs) and formal service contracts outlining the scope, deliverables, timelines, and terms.

5. Service Initiation: We onboard your team and initiate the agreed-upon services.`,
      icon: <Settings className="w-6 h-6" />,
      category: "Process"
    },
    {
      id: 3,
      question: "Do you offer one-time security audits or only ongoing services?",
      answer: `We offer both. We understand that different organizations have different needs. You can engage us for:

• One-time assessments: Such as single-instance VAPT, security audits, or specific forensic investigations.

• Ongoing retainer-based services: For continuous protection, like managed SOC services, recurring vulnerability scans, or continuous threat intelligence.

We can tailor the engagement model to suit your budget and security posture.`,
      icon: <Clock className="w-6 h-6" />,
      category: "Services"
    },
    {
      id: 4,
      question: "How secure is my company's data with ETSEC during service delivery?",
      answer: `Data security and client confidentiality are paramount at ETSEC. We adhere to the highest industry standards for data protection. Key measures include:

• Strict Confidentiality: All our staff are bound by strict confidentiality agreements.

• Non-Disclosure Agreements (NDAs): We sign formal NDAs with all clients prior to accessing any sensitive information.

• Compliance Frameworks: We adhere to relevant data protection and compliance frameworks such as ISO 27001 (Information Security Management), GDPR (General Data Protection Regulation), and other industry best practices.

• Technical Safeguards: We use encrypted communication channels, secure storage, and robust access controls for all client data.`,
      icon: <Lock className="w-6 h-6" />,
      category: "Security"
    },
    {
      id: 5,
      question: "Can I request a custom service package tailored to my business needs?",
      answer: `Absolutely. Our cybersecurity services are designed to be modular and highly flexible. We encourage clients to discuss their unique challenges and requirements with us. We will then craft a custom service package that precisely addresses your specific security concerns and aligns with your business objectives and budget.`,
      icon: <Package className="w-6 h-6" />,
      category: "Customization"
    }
  ];

const FAQPage = () => {
  // faqData is static (module scope) so it's safe to reference directly
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  useEffect(() => {
    const filtered = faqData.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(filtered);
  }, [searchTerm]);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  // categories variable removed because it's not used

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .glass-effect {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .hover-glow {
          transition: all 0.3s;
        }
        .hover-glow:hover {
          box-shadow: 0 8px 30px rgba(96,165,250,0.3);
          transform: translateY(-3px);
        }
        .question-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .question-content.active {
          max-height: 1000px;
        }
        .gradient-text {
          background: linear-gradient(135deg,#60a5fa,#a855f7,#ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <header className="text-center p-10">
        <HelpCircle className="w-12 h-12 text-blue-400 mx-auto animate-float" />
        <h1 className="text-4xl font-bold gradient-text">Frequently Asked Questions</h1>
        <p className="text-gray-300 mt-2">Your queries, answered.</p>
        <input 
          className="mt-4 p-2 rounded bg-white/10 text-white w-72"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-4">
        {filteredFAQs.map(faq => (
          <div key={faq.id} className="glass-effect rounded hover-glow">
            <button 
              onClick={() => toggleQuestion(faq.id)} 
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                {faq.icon}
                <span className="ml-2 text-white">{faq.question}</span>
              </div>
              {activeQuestion === faq.id ? 
                <ChevronUp className="text-blue-400" /> :
                <ChevronDown className="text-blue-400" />
              }
            </button>
            <div className={`question-content ${activeQuestion === faq.id ? 'active' : ''}`}>
              <div className="p-4 text-gray-300 whitespace-pre-wrap">{faq.answer}</div>
            </div>
          </div>
        ))}
        {filteredFAQs.length === 0 && (
          <div className="text-center text-gray-400">No FAQs found. Try a different search.</div>
        )}
      </main>

      <footer className="text-center text-gray-500 p-4">
        © 2025 ETSEC Cybersecurity Services
      </footer>
    </div>
  );
};

export default FAQPage;
