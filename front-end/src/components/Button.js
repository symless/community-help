import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Button.scss";

/**
 * Use `Button` to create a clickable component.
 *
 * Approval: Pending
 */
export const Button = forwardRef(
  (
    {
      children,
      onClick,
      color = "blue",
      outline = false,
      size = "md",
      className,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      onClick={onClick}
      className={classNames(
        "btn",
        {
          "btn-outline": outline,
          [`btn-${color}`]: color,
          [`btn-${size}`]: size,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
