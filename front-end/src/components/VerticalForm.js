import React from "react";
import "./VerticalForm.scss";

export const VerticalForm = (props) => (
  <form className="vertical-form" {...props} />
);

export const LabeledInput = ({ title, children, ...props }) => (
  <div className="row" {...props}>
    <label>
      <span className="title">{title}</span>
      {children}
    </label>
  </div>
);
