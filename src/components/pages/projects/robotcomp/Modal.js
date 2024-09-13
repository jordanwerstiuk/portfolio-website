import React, { useEffect, useRef } from "react";
import "./Modal.css"

function Modal({ title, content, onClose }) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target){
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="modal-overlay">
            <div className="modal-content">
                <h1 className="modal-title">{title}</h1>
                <p className="modal-text">{content}</p>
                <button onClick={onClose} className="modal-button">
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal


