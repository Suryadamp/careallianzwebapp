import React from 'react';
import './SuccessModal.css';

const CommonModal = ({ name,onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{name}</h2>

        <p>{`Coming Soon`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CommonModal;
