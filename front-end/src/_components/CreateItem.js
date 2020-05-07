import React from "react";
import { Modal } from "../components/Modal";
import {Panel, PanelTitle, PanelContent} from "../components/Panel"
import { TextInput } from "../components/TextInput";
import { VerticalForm, LabeledInput } from "../components/VerticalForm";

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

  addItem() {
    var obj = {
      Title: "Help Needed in shopping",
      Description: "Help shopping groceries",
      ButtonTitle: "Help!",
      ItemID: 1,
      personalContact: "12341234",
      status: 0,
    };
    this.props.funcs.addDummy(obj);
  }

  render() {
    return (
      <Modal
        active={true}
        onDismiss={() => {
          this.props.funcs.displayCreate();
        }}
      >
        <Panel color="blue">
          <PanelTitle>Help needed</PanelTitle>
          <PanelContent>
            <VerticalForm>
              <TextInput
                placeholder="Describe what you need?"
                type="textarea"
              />
              <LabeledInput title="Name">
                <TextInput placeholder="Your Name" />
              </LabeledInput>
              <LabeledInput title="Post code">
                <TextInput placeholder="Post code" />
              </LabeledInput>
              <LabeledInput title="House name/no">
                <TextInput placeholder="House name or number" />
              </LabeledInput>
              <LabeledInput title="Phone number">
                <TextInput placeholder="Contact number" />
              </LabeledInput>
            </VerticalForm>
          </PanelContent>
        </Panel>
      </Modal>
    );
  }
}
