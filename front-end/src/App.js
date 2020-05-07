import React from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

import PanelComponent from "./_components/Panel";
import AuthComponent from "./_components/Auth";
import DetailLayoverComponent from "./_components/DetailLayover";


// Status: 0=Open, 1=In Progress, 2=Closed
const PanelData = {
  helps: {
    title: "Ask for Help",
    color: "blue",
    url: "http://localhost:24825/",
    fetchEndPoint: "help_requests/",
    itemsObjList: [
      {
        Title: "Help Needed in shopping",
        Description: "Help shopping groceries",
        ButtonTitle: "Help!",
        ItemID: 1,
        personalContact: "12341234",
        status: 0,
      },
      {
        Title: "Help Picking up Medicines",
        Description: "I Need someone to fetch some medicines at the drugstore",
        ButtonTitle: "Help!",
        ItemID: 2,
        personalContact: "43214321",
        status: 0,
      },
      {
        Title: "Assistance with Math Education",
        Description: "I need someone to teach me math!",
        ButtonTitle: "Help!",
        ItemID: 1,
        personalContact: "3141564",
        status: 0,
      },
    ],
  },
  offers: {
    title: "Help Offered",
    color: "purple",
    url: "http://localhost:24825/",
    fetchEndPoint: "assistance_provided/",
    itemsObjList: [
      {
        Title: "Going Shopping on Saturday",
        Description: "I'm going to the groceries store on Saturday. Let me know if I can fetch you anything!",
        ButtonTitle: "Ask!",
        ItemID: 1,
        personalContact: "12341234",
        status: 0,
      },
      {
        Title: "Math Classes",
        Description: "I have some spare time to assist with math education!",
        ButtonTitle: "Ask!",
        ItemID: 2,
        personalContact: "123581321",
        status: 0,
      },
      {
        Title: "Violin Classes",
        Description: "I am offering violin lessons via video call.",
        ButtonTitle: "Ask!",
        ItemID: 3,
        personalContact: "34125621",
        status: 0,
      },
    ],
  },
};

// import { Panel2}
function App1() {
  return (
    <div className="App">
      <div className="background-gradiant" />
      <header>
        <h1 className="title">Help?</h1>
        <h2 className="sub-title">Welcome to...</h2>
        <p className="phrase">
          a place where people in the community can help others and get help.
        </p>
      </header>
      <div className="row">
        <div className="col">
          <Button color="blue" size="md">
            Ask for help
          </Button>
          <Panel color="blue">
            <PanelTitle>Help needed</PanelTitle>
            <PanelContent>
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm">
                    help
                  </Button>
                }
              />
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm">
                    help
                  </Button>
                }
              />
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm">
                    help
                  </Button>
                }
              />
            </PanelContent>
          </Panel>
        </div>
        <div className="col">
          <Button color="purple" size="md">
            I want help
          </Button>
          <Panel color="purple">
            <PanelTitle>Help offered</PanelTitle>
            <PanelContent>
              <Task
                title="Shopping"
                subtitle="Available now in Peel"
                badge={
                  <Button color="purple" size="sm">
                    help
                  </Button>
                }
              />
            </PanelContent>
          </Panel>
        </div>
      </div>
    </div>
  );
}

//TODO: add a function to child that will set the state of App to display login
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      didAuth: false,
      loginPop: false,
      selectedItem: {
        type: "Request",
        obj: {},
      },
    };
    this.Auth = {
      someInfo: "info",
      needLogin: this.needLogin,
      setLogin: this.setLogin,
      displayLogin: this.displayLogin,
      logout: this.logout,
    };
    this.showDetail = {
      popup: this.popup,
    };
  }

  /// this function will be passed to panelItem.
  popup = (obj) => {
    console.log("App:: PopUp() => ", obj);
    // this.state.selectedItems.obj = obj;
    // this.setState({ selectedItems: this.selectedItems });
  };

  /// this function will be passed on to loginComponent
  setLogin = (user) => {
    this.setState({ user: user });
    this.setState({ didAuth: true });
  };

  logout = (value) => {
    // TODO: send request to logout
    console.log("LOGOUT REQUESTED", value);
  };

  // this function will be called by children to initiate login.
  displayLogin = () => {
    this.setState({ loginPop: true });
  };

  closeLogin = () => {
    this.setState({ loginPop: false });
  };

  // this function will be called by child component (in AppDisplay) to check the Auth State
  needLogin = () => {
    if (!this.state.didAuth) {
      return true;
    } else {
      return false;
    }
  };

  /// display Detail for either type = "Request" / "Assistance"
  /// add obj to selected
  displayPopup = (type, obj) => {
    console.log("APP.JS:: displayPopup", type, " and ", obj);
  };

  render() {
    return (
      <div className="App">
        {this.state.userInfo ? (
          <div>{/* TODO: create component for userinfo */}</div>
        ) : (
          <div>{/* TODO: Create component for login and register */}</div>
        )}
        <div className="background-gradiant" />
        <header>
          <h1 className="title">Help?</h1>
          <h2 className="sub-title">Welcome to...</h2>
          <p className="phrase">
            a place where people in the community can help others and get help.
          </p>
        </header>
        <div className="row">
          <div className="col">
            <Button color="blue">Ask for help</Button>
            <PanelComponent
              funcs={this.showDetail}
              data={PanelData.helps}
            ></PanelComponent>
          </div>
          <div className="col">
            <Button color="purple">I want help</Button>
            <PanelComponent
              funcs={this.showDetail}
              data={PanelData.offers}
            ></PanelComponent>
          </div>
        </div>
        {this.state.selectedItem.obj.id && (
          <DetailLayoverComponent item={this.state.selectedItem} />
        )}
        {!this.state.userInfo && (
          <div>
            {/* TODO: if the user is not logged in, main page should contain Auth; otherwise, dont */}
            <AuthComponent funcs={this.Auth} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
