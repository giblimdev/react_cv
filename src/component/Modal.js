import React from "react";

function MyModal({ isOpen, onClose, article }) {
  if (!article) return null; // Return null if no article is provided

  const { titre, description, img, date } = article; // Extract article properties

  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <h2>{titre}</h2>
          <img src={img} alt={titre} className="modal-img" />
        </div>
        <div className="modal-body">
          <p>{description}</p>
        </div>
        <div className="modal-footer">
          <p className="modal-date">{date}</p>
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
