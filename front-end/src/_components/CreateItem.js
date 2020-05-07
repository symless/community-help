import React from "react";
import { Modal } from "../components/Modal";

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

export default class CreateItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <Modal
        active={true}
        onDismiss={() => {
          this.props.funcs.displayCreate();
        }}
      >
        Create Item
      </Modal>
    );
  }
}
