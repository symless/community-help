import React from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

import PanelComponent from "./_components/Panel";

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

// DAUN: App2() to test out my panels components
export function AppDisplay(funcs) {
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
          <Button color="blue">Ask for help</Button>
          <PanelComponent funcs={funcs} data={PanelData.helps}></PanelComponent>
        </div>
        <div className="col">
          <Button color="purple">I want help</Button>
          <PanelComponent data={PanelData.offers}></PanelComponent>
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
    };
    this.Auth = {
      needLogin: this.needLogin,
      setLogin: this.setLogin,
      displayLogin: this.displayLogin,
    };
  }

  /// this function will be passed on to loginComponent
  setLogin = (user) => {
    this.setState({ user: user });
    this.setState({ didAuth: true });
  };

  // this function will be called by children to initiate login.
  displayLogin = () => {
    this.setState({ loginPop: true });
  };

  // this function will be called by child component (in AppDisplay) to check the Auth State
  needLogin = () => {
    if (!this.state.didAuth) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return <AppDisplay funcs={this.Auth} />;
  }
}

export default App;
