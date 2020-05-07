import React from "react";

import { Panel, PanelTitle, PanelContent } from "../components/Panel";

/*  Login Component:
    TODO: needs followi

    Login Component has following responsibility

    TODO: seperate Login Component and Register Component
    1. Login Form
        - Username
        - Password
        - Login Reguest Button
        - Register Form Button
    2. Register Form
        - Username
        - Password
        - Repeat Password
        - (Email?)
        - Register Request Button
        - Back button

*/

export default class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        username: "",
        password: "",
        repeat: "",
        email: "",
      },
    };
  }

  requestRegister = () => {
    this.props.funcs(this.state.registerForm);
  };

  render() {
    return <Panel color={"purple"}></Panel>;
  }
}
