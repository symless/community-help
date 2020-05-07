import React from "react";

import { Task } from "../components/Task";
import { Button } from "../components/Button";
/*
    PanelItem Component contains as following prop:
    1. Title: String
    2. Description: String
    3. Color: String
    4. ButtonTitle: String
    5. ItemID: String

    PanelItem Component contains following function:
    1. request(id) -> ItemDetailObj

*/

export default class PanelItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemObj: this.props.itemObj,
    };
    this.request = this.request.bind(this);
  }

  componentWillMount() {
    // Fetch for the detail as component is getting loaded
    console.log("PanelItemComponent: ", this.state.itemObj);
    console.log(
      "PanelItemComponent: (TODO) send request to:",
      this.props.url + this.state.itemObj.ItemID
    );
    // this.request();
  }

  //TODO: create request for button interraction.
  handleButton() {}

  //DAUN: Note that the getItem is optional since we might have all data from getList called from parent
  request() {
    // We should have prop URL, or have a connection as prop.
    fetch(this.props.url + this.state.itemObj.ItemID).then((response) => {
      let resultObj = response.json();
      //TODO: once we fetch the item info, set missing field (atm it is desc)
    });
  }

  render() {
    return (
      // Set classnames for the visual
      <Task
        title={this.props.itemObj.Title}
        subtitle={this.props.itemObj.Description}
        badge={
          <Button
            color="blue"
            size="sm"
            onClick={() => {
              console.log("hmmmm....");
              this.props.onClick(this.state.itemObj);
            }}
          >
            {this.props.itemObj.ButtonTitle}
          </Button>
        }
      />
    );
  }
}
