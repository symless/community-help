import React from "react";

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
  login = (form) => {};

  register = (form) => {};

  render() {
    return (
      <div>
        {this.state.isRegister ? <RegisterComponent /> : <LoginComponent />}
      </div>
    );
  }
}
