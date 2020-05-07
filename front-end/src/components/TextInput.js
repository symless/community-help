import React from "react";
import classNames from "classnames";
import "./TextInput.scss";

export const TextInput = React.forwardRef(
  ({ type = "text", className, ...props }, ref) =>
    type === "textarea" ? (
      <textarea
        {...props}
        ref={ref}
        className={classNames("text-input", className)}
      />
    ) : (
      <input
        {...props}
        type={type}
        ref={ref}
        className={classNames("text-input", className)}
      />
    )
);
