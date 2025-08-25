// new-etsec/src/components/GetStartedForm.js
import React, { useState, useEffect } from 'react';
import './GetStartedForm.css'; // We'll create this CSS next
import { serviceGroups } from '../data/servicesData'; // Import our centralized data

const GetStartedForm = ({ isOpen, onClose, initialGroup = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone for more contact options
    company: '', // Added company
    message: '',
    selectedGroup: initialGroup, // Pre-select group if provided
    selectedServices: [],
  });

  const [currentServices, setCurrentServices] = useState([]);

  // Effect to update currentServices when selectedGroup changes or component mounts
  useEffect(() => {
    if (formData.selectedGroup) {
      const group = serviceGroups.find(g => g.id === formData.selectedGroup);
      setCurrentServices(group ? group.services : []);
    } else {
      setCurrentServices([]);
    }
    // Reset selectedServices when group changes
    setFormData(prev => ({ ...prev, selectedServices: [] }));
  }, [formData.selectedGroup]);

  // Handle body scroll locking when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGroupChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      selectedGroup: value,
      selectedServices: [], // Clear services when group changes
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      selectedServices: checked
        ? [...prev.selectedServices, value]
        : prev.selectedServices.filter(service => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission to handle it via Netlify

    // Basic validation
    if (!formData.name || !formData.email || !formData.selectedGroup || formData.selectedServices.length === 0) {
      alert('Please fill in your contact details, select a service group, and at least one service.');
      return;
    }

    // Construct the data Netlify will receive
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', 'getStartedContact'); // Required for Netlify form detection
    netlifyFormData.append('name', formData.name);
    netlifyFormData.append('email', formData.email);
    netlifyFormData.append('phone', formData.phone);
    netlifyFormData.append('company', formData.company);
    netlifyFormData.append('message', formData.message);
    netlifyFormData.append('selectedGroup', formData.selectedGroup);
    netlifyFormData.append('selectedServices', formData.selectedServices.join(', ')); // Send as comma-separated string

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(netlifyFormData).toString(),
    })
    .then(() => {
      alert('Thank you! Your inquiry has been submitted. We will get back to you with a quote shortly.');
      onClose(); // Close the modal
      setFormData({ // Reset form
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        selectedGroup: '',
        selectedServices: [],
      });
    })
    .catch((error) => alert('There was an error submitting your form. Please try again later.'));
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-circuit-bg"></div>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h3 className="popup-title">Let's Get Started!</h3>
        <p className="popup-subtitle">
          Tell us about your needs, and we'll send a custom quote to your email shortly.
        </p>

        <form name="getStartedContact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="custom-getstarted-form">
          {/* Hidden Netlify field for form detection */}
          <input type="hidden" name="form-name" value="getStartedContact" />

          {/* User Details Section */}
          <h4 className="form-section-title">Your Details</h4>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleInputChange} className="form-input" required />
            <div className="input-glow"></div>
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleInputChange} className="form-input" required />
            <div className="input-glow"></div>
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Your Phone (Optional)" value={formData.phone} onChange={handleInputChange} className="form-input" />
            <div className="input-glow"></div>
          </div>
          <div className="form-group">
            <input type="text" name="company" placeholder="Your Company (Optional)" value={formData.company} onChange={handleInputChange} className="form-input" />
            <div className="input-glow"></div>
          </div>

          {/* Service Group Selection */}
          <h4 className="form-section-title">Choose Service Group *</h4>
          <div className="service-group-selection">
            <select name="selectedGroup" value={formData.selectedGroup} onChange={handleGroupChange} className="form-select" required>
              <option value="">Select a Group</option>
              {serviceGroups.map(group => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <div className="select-arrow"></div>
            <div className="input-glow"></div>
          </div>

          {/* Individual Service Selection */}
          {formData.selectedGroup && currentServices.length > 0 && (
            <>
              <h4 className="form-section-title">Select Services *</h4>
              <div className="service-checkboxes">
                {currentServices.map(service => (
                  <label key={service.id} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="selectedServices[]" // Netlify captures multiple checkboxes with []
                      value={service.title} // Send the title as the value
                      checked={formData.selectedServices.includes(service.title)}
                      onChange={handleServiceChange}
                    />
                    {service.title}
                  </label>
                ))}
              </div>
            </>
          )}

          {/* Message and Submit */}
          <h4 className="form-section-title">Additional Message</h4>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us more about your specific needs..."
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              rows="4"
            ></textarea>
            <div className="input-glow"></div>
          </div>

          <p className="pricing-disclaimer">
            * Exact pricing will be provided via email shortly after reviewing your requirements.
          </p>

          <button type="submit" className="submit-btn">
            <span>Submit Inquiry</span>
            <div className="btn-glow"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;