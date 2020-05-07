import React, { useState } from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

import PanelComponent from "./_components/Panel";
import AuthComponent from "./_components/Auth";
import DetailLayoverComponent from "./_components/DetailLayover";
import { Modal } from "./components/Modal";

const PanelData = {
  helps: {
    title: "Ask for Help",
    color: "blue",
    url: "http://localhost:24825/",
    fetchEndPoint: "help_requests/",
    itemsObjList: [
      {
        Title: "Task 1",
        Description: "Description...",
        ButtonTitle: "Button 1",
        ItemID: 1,
        personalContact: "12341234",
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
        Title: "Offer 1",
        Description: "Description...",
        ButtonTitle: "Button 1",
        ItemID: 1,
        personalContact: "12341234",
      },
    ],
  },
};

// import { Panel2}
function App1() {
  const [active, setModalActive] = useState(false);

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
          <Button color="blue" size="md" onClick={() => setModalActive(true)}>
            Ask for help
          </Button>
          <Panel color="blue">
            <PanelTitle>Help needed</PanelTitle>
            <PanelContent>
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm" outline={true}>
                    help
                  </Button>
                }
              />
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm" outline={true}>
                    help
                  </Button>
                }
              />
              <Task
                title="I need a small amout of shopping"
                subtitle="Asked 3hrs ago - Peel"
                badge={
                  <Button color="blue" size="sm" outline={true}>
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
                color="purple"
                badge={
                  <Button color="purple" size="sm" outline={true}>
                    ask
                  </Button>
                }
              />
            </PanelContent>
          </Panel>
        </div>
      </div>
      <Modal active={active} onDismiss={() => setModalActive(false)}>
        <Panel color="blue">
          <PanelTitle>Help needed</PanelTitle>
          <PanelContent>
            <Task
              title="I need a small amout of shopping"
              subtitle="Asked 3hrs ago - Peel"
              badge={
                <Button color="blue" size="sm" outline={true}>
                  help
                </Button>
              }
            />
            <Task
              title="I need a small amout of shopping"
              subtitle="Asked 3hrs ago - Peel"
              badge={
                <Button color="blue" size="sm" outline={true}>
                  help
                </Button>
              }
            />
            <Task
              title="I need a small amout of shopping"
              subtitle="Asked 3hrs ago - Peel"
              badge={
                <Button color="blue" size="sm" outline={true}>
                  help
                </Button>
              }
            />
          </PanelContent>
        </Panel>
      </Modal>
    </div>
  );
}

// DAUN: App2() to test out my panels components
export function AppDisplay({ funcs, ...props }) {
  const [active, setModalActive] = useState(false);

  return (
    <div className="App">
      {props.userInfo.username ? (
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
          <PanelComponent funcs={funcs} data={PanelData.helps}></PanelComponent>
        </div>
        <div className="col">
          <Button color="purple">I want help</Button>
          <PanelComponent data={PanelData.offers}></PanelComponent>
        </div>
      </div>
      {props.loginPop && <AuthComponent funcs={funcs} />}
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
      loginPop: true,
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
    console.log("display Login -> POP");
    if (this.state.loginPop) {
      this.setState({ loginPop: false });
    } else {
      this.setState({ loginPop: true });
    }
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
      <AppDisplay
        userInfo={this.state.user}
        funcs={this.Auth}
        loginPop={this.state.loginPop}
      />
    );
  }
}

export default App;
