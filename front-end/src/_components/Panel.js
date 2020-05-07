import React from "react";

import { Panel, PanelTitle, PanelContent } from "../components/Panel";

import PanelItemComponent from "./PanelItem";
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

export default class PanelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredList: [],
    };
    this.getItemsList = this.getItemsList.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    console.log("PANEL.JS: ", this.props.funcs);
    this.setState({ filteredList: this.props.data.itemsObjList });
    console.log(
      "Attempt to send request to:",
      this.props.data.url + this.props.data.fetchEndPoint
    );
    // this.getItemsList();
  }

  getItemsList() {
    // we should have prop URL, or have a connection as prop.
    fetch(this.props.data.url + this.props.data.fetchEndPoint).then(
      (response) => {
        var resultObj = response.json();
        this.state.data.itemsObjList = resultObj;
        this.setState({ data: this.state.data });
      }
    );
  }

  search(text) {
    var filteredList;
    if (text === "") {
      // if the text keyword is empty, set to default
      filteredList = this.state.data.itemsObjList;
    } else {
      filteredList = this.state.data.itemsObjList.filter((obj) => {
        let title = obj.title;
        let keyword = obj.keyword;
        return title.includes(text) || keyword.includes(text);
      });
    }
    this.setState({ filteredList: filteredList });
  }

  render() {
    return (
      <Panel color={this.state.data.color}>
        <PanelTitle>{this.state.data.title}</PanelTitle>
        <PanelContent>
          {this.state.filteredList.map((item, key) => {
            return (
              <PanelItemComponent
                url={this.state.data.url + this.state.data.fetchEndPoint}
                itemObj={item}
                key={key}
                onClick={(selectedObj) => {
                  console.log("CAAAAALBACK 1:", selectedObj);
                  this.props.funcs.popup(selectedObj);
                }}
              />
            );
          })}
        </PanelContent>
      </Panel>
    );
  }
}
