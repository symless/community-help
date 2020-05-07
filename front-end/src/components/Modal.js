import React from "react";
import "./Modal.scss";

export const Modal = ({ active, children, onDismiss, ...props }) =>
  !!active && (
    <div className="modal-curtain" onClick={onDismiss}>
      <div className="modal-holder" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
