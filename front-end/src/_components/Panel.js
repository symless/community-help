import React from "react";

import PanelItem from "./PanelItem";

/*
    Panel Component contains as following prop:
    1. Title: String
    2. Color: String
    3. RequestEndPoint: String
    4. FetchEndpoint: String

    ** Additional props required:
    1. url: String

    NOTE: url + FetchEndpoint should be able to create a valid URL.

    Panel Component contains following function:
    1. Search(String) -> Void
    2. GetItems(RequestEndPoint) -> [ItemsObj]

*/

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.Title,
      color: this.props.Color,
      requestEndPoint: this.props.RequestEndPoint,
      itemsObjList: [],
      filteredList: [],
    };
    this.getItemsList = this.getItemsList.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    this.setState({ title: this.props.title });
    this.setState({ color: this.props.color });
    this.setState({ requestEndPoint: this.props.RequestEndPoint });
    this.getItemsList();
  }

  getItemsList() {
    // we should have prop URL, or have a connection as prop.
    fetch(this.props.url + this.fetchEndPoint).then((response) => {
      var resultObj = response.json();
      this.setState({ itemsObjList: resultObj });
    });
  }

  search(text) {
    var filteredList;
    if (text === "") {
      // if the text keyword is empty, set to default
      filteredList = this.state.itemsObjList;
    } else {
      filteredList = this.state.itemsObjList.filter((obj) => {
        let title = obj.title;
        let keyword = obj.keyword;
        return title.includes(text) || keyword.includes(text);
      });
    }
    // this.setState({fil})
  }

  render() {
    return (
      <div className="to-be-implemented">
        {/* There should be some header, filter here */}
        {/* TODO: Add content for the PanelComponent */}
        {/* TODO: perhaps create filter as its own object too? */}
        {this.state.title}
        {this.state.filteredList.map((item) => (
          <PanelItem url={this.props.url + this.props.endpoint} id={item.id} />
        ))}
      </div>
    );
  }
}
