// new-etsec/src/pages/ComingSoon.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css'; // We'll create this CSS next

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-title">🚀 Coming Soon!</h1>
      <p className="coming-soon-message">
        This feature will be available to you shortly. We're working hard to bring you exciting new functionalities!
      </p>
      <Link to="/" className="coming-soon-home-btn">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ComingSoon;