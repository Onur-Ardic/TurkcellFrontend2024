import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #333;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  color: #fff;
`;

const Modal = ({ project, onClose }) => (
  <ModalBackground onClick={onClose}>
    <ModalContent onClick={e => e.stopPropagation()}>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
      <p><strong>Bitiş Tarihi:</strong> {project.endDate}</p>
      <p><strong>Kullanılan Dil:</strong> {project.language}</p>
      <p><strong>Açıklama:</strong> {project.description}</p>
      <button onClick={onClose}>Kapat</button>
    </ModalContent>
  </ModalBackground>
);

export default Modal;
