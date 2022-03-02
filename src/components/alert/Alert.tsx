import React, { FC } from 'react';
import "./alert.css"

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div className="bg_modal">
      <div className="modal_content">

      <div className="modal-background" onClick={onClose}></div>
          <p className="modal-card-title has-text-white">{message}</p>
          <button className="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Alert;