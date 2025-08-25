import React, { useState } from 'react';
import './CustomizePlans.css';

const servicesData = [
  { name: 'VAPT', price: 500 },
  { name: 'SOC / SIEM Setup', price: 1000 },
  { name: 'Blue Teaming Solution', price: 800 },
  { name: 'Compliance & Audit', price: 600 },
  { name: 'GNSS Security', price: 900 },
  { name: 'Smart Contract Auditing', price: 1100 },
];

function CustomizePlan() {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const totalPrice = selectedServices.reduce(
    (sum, serviceName) =>
      sum + servicesData.find((s) => s.name === serviceName).price,
    0
  );

  return (
    <div className="customize-plan-container">
      <div className="customize-header">
        <h1><span>Customize</span> Your Security Plan</h1>
        <p>Select only the services you need. Pay only for what matters.</p>
      </div>
      <div className="customize-grid">
        <div className="services-select">
          <h2>🛠️ Choose Services</h2>
          {servicesData.map((service) => (
            <label key={service.name} className="service-option">
              <input
                type="checkbox"
                checked={selectedServices.includes(service.name)}
                onChange={() => toggleService(service.name)}
              />
              <span className="service-name">{service.name}</span>
              <span className="service-price">${service.price}</span>
            </label>
          ))}
        </div>
        <div className="summary-card">
          <h2>📦 Plan Summary</h2>
          {selectedServices.length === 0 ? (
            <p className="no-service">No services selected yet.</p>
          ) : (
            <ul className="summary-list">
              {selectedServices.map((s) => (
                <li key={s}>
                  ✅ {s} – $
                  {servicesData.find((service) => service.name === s).price}
                </li>
              ))}
            </ul>
          )}
          <div className="summary-total">
            <span>Total Estimated Price:</span>
            <strong>${totalPrice}</strong>
          </div>

          <button className="start-button">Start Your Journey</button>
        </div>
      </div>
    </div>
  );
}
export default CustomizePlan;