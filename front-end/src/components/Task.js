import React, { forwardRef } from "react";
import classNames from "classnames";
import "./Task.scss";

export const Task = forwardRef(
  ({ color = "blue", title, subtitle, badge, className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("task", `task-${color}`, className)}
      {...props}
    >
      <div className="task-left">
        <div className="task-title">{title}</div>
        <div className="task-sub-title">{subtitle}</div>
      </div>
      <div className="task-right">
        <div className="task-badge">{badge}</div>
      </div>
    </div>
  )
);
