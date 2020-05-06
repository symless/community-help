import React, { forwardRef, Component } from "react";
import classNames from "classnames";
import { Button } from "./Button";
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

export class PanelContainer extends Component {
  constructor(props){
    super();
    this.state = {
      fetchEndpoint: props.fetchEndpoint,
      sendEndpoint: props.sendEndpoint,
      title: props.title,
      color: props.color
    };
  }

  render(){
    return <div className="col">
    <Button color={this.state.color}>Ask for help</Button>
    <Panel color={this.state.color}>
      <PanelTitle>Help needed</PanelTitle>
      <PanelContent>test</PanelContent>
    </Panel>
  </div>
  }
}
