import React from "react";
import { Modal } from "../components/Modal";

import RegisterComponent from "./Register";
import LoginComponent from "./Login";

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

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false,
    };
  }

  // Login function sends request on the form
  login = (form) => {
    this.props.funcs.setLogin("hello");
  };

  register = (form) => {
    this.props.funcs.setRegister("hello");
  };

  render() {
    return (
      <Modal
        active={true}
        onDismiss={() => {
          this.props.funcs.displayLogin();
        }}
      >
        {this.state.isRegister ? (
          <RegisterComponent funcs={this.props.funcs} />
        ) : (
          <LoginComponent funcs={this.props.funcs} />
        )}
      </Modal>
    );
  }
}
