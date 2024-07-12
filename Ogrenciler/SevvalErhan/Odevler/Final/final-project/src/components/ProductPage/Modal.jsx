import React from 'react';

const Modal = ({ isModalOpen, closeModal, children }) => {
  return (
    <div className={`modal ${isModalOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
