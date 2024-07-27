// Popup.js
import React from 'react';
import './Popup.css'; // Optional: For styling the popup

const Popup = ({ message,userResult, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>{message}</h1>
        <h1>{userResult}</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
