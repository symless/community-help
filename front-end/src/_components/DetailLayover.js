import React from "react";
import { Modal } from "../components/Modal";

/*  DetailLayoverComponent
    This page will have 2 states; 1 being help detail, 1 being offer detail

    Props required:
        1. whether it is help or not
        2. request parent to refresh (if needed? )
        ** request can be completely encapsulated?

    Functions handled:

*/

export default class DetailLayoverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequest: false,
    };
  }

  componentWillMount() {
    console.log("DetailLayoverComponent", this.props.item.obj);
    // if (this.props.item.type == "Request") {
    //   this.setState({ isRequest: true });
    // } else {
    //   this.setState({ isRequest: false });
    // }
  }

  sendRequest() {
    if (this.state.isRequest) {
      //send request accept
    } else {
      //send offer receive accept
    }
  }

  render() {
    return (
      <Modal
        active={true}
        onDismiss={() => {
          this.props.funcs.displayDetail();
        }}
      >
        {/* EXAMPLE USAGE */}
        {this.props.item.obj.Title}
      </Modal>
    );
  }
}
