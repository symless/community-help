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

  componentWillMount() {
    this.props.funcs.logout("hello");
  }

  // login gets passed down to LoginComponent, receives the form
  // passes the form to parent to send info
  login = (form) => {
    console.log("AuthComponent: Login Function input :", form);
  };

  // register gets passed down to RegisterComponent, receives the form
  // passes the form to parent to send info
  register = (form) => {
    console.log("AuthComponent: Register Function input :", form);
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
