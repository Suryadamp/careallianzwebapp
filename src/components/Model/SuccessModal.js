import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ name,onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>{`${name} added to cart successfully.`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
