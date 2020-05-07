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

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false,
      loginForm: {
        username: "",
        password: "",
      },
    };
  }

  // Login function sends request on the form
  requestLogin = () => {
    this.props.funcs(this.state.loginForm);
  };

  render() {
    return <Panel color={"purple"}></Panel>;
  }
}
