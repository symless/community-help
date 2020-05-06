import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Panel.scss";

export const Panel = forwardRef(
  ({ color = "blue", children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("panel", `panel-${color}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);

export const PanelTitle = forwardRef(
  ({ children, className, ...props }, ref) => (
    <h3 ref={ref} className={classNames("panel-title", className)} {...props}>
      {children}
    </h3>
  )
);

export const PanelContent = forwardRef(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("panel-content", className)}
      {...props}
    >
      {children}
    </div>
  )
);
