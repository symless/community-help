import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Button.scss";

/**
 * Use `Button` to create a clickable component.
 *
 * Approval: Pending
 */
export const Button = forwardRef(
  ({ children, onClick, color = "blue", className, ...props }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={classNames("btn", { [`btn-${color}`]: color }, className)}
      {...props}
    >
      {children}
    </button>
  )
);
