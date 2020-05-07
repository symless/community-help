import React, { useState } from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

import PanelComponent from "./_components/Panel";
import { Modal } from "./components/Modal";
import { TextInput } from "./components/TextInput";
import { VerticalForm, LabeledInput } from "./components/VerticalForm";

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
    </div>
  );
}

// DAUN: App2() to test out my panels components
export function AppDisplay({ funcs, ...props }) {
  return (
    <div className="App">
      {props.userInfo ? (
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
      {!props.userInfo && (
        <div>
          {/* TODO: if the user is not logged in, main page should contain Auth; otherwise, dont */}
        </div>
      )}
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
      logout: this.logout,
    };
  }

  /// this function will be passed on to loginComponent
  setLogin = (user) => {
    this.setState({ user: user });
    this.setState({ didAuth: true });
  };

  logout = () => {
    // TODO: send request to logout
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
    return <AppDisplay userInfo={this.state.user} funcs={this.Auth} />;
  }
}

export default App1;
