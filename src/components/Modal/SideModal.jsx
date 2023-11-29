import React, { useState } from 'react';
import Modal from 'react-modal';
import './SideModal.css';
import SideMenuModal from '../SideMenu/SideMenuModal';

const SideModal = ({ isOpen, onRequestClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <SideMenuModal />
      </Modal>
    </div>
  );
};

export default SideModal;
