import React from "react";

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

export default class Panelitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.Title,
      desc: this.props.Description,
      color: this.props.Color,
      buttonTitle: this.props.ButtonTitle,
    };
    this.request = this.request.bind(this);
  }

  componentWillMount() {
    // Fetch for the detail as component is getting loaded
    this.request();
  }

  //TODO: create request for button interraction.
  handleButton() {}

  //DAUN: Note that the getItem is optional since we might have all data from getList called from parent
  request() {
    // We should have prop URL, or have a connection as prop.
    console.log("trying to get something from localhost");
    fetch(this.props.url + "/" + this.props.id).then((response) => {
      let resultObj = response.json();
      //TODO: once we fetch the item info, set missing field (atm it is desc)
      this.setState({ id: resultObj.id });
      this.setState({ title: resultObj.title });
      this.setState({ desc: resultObj.description });
    });
  }

  render() {
    return (
      // Set classnames for the visual
      <div className="to-be-implemented">
        {/* TODO:  Set PanelItem information */}
      </div>
    );
  }
}
