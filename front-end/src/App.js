import React, { useState } from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

import PanelComponent from "./_components/Panel";
import AuthComponent from "./_components/Auth";
import DetailLayoverComponent from "./_components/DetailLayover";
import { Modal } from "./components/Modal";
import { TextInput } from "./components/TextInput";
import { VerticalForm, LabeledInput } from "./components/VerticalForm";
import CreateItemComponent from "./_components/CreateItem";

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
        Description:
          "I'm going to the groceries store on Saturday. Let me know if I can fetch you anything!",
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
export function AppDisplay({ selectedItem, funcs, ...props }) {
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
          <Button
            color="blue"
            onClick={() => {
              funcs.displayCreate("Help");
            }}
          >
            Ask for help
          </Button>
          <PanelComponent funcs={funcs} data={PanelData.helps}></PanelComponent>
        </div>
        <div className="col">
          <Button
            color="purple"
            onClick={() => {
              funcs.displayCreate("Offer");
            }}
          >
            I want help
          </Button>
          <PanelComponent
            funcs={funcs}
            data={PanelData.offers}
          ></PanelComponent>
        </div>
      </div>
      {props.PopType == 1 && <AuthComponent funcs={funcs} />}
      {props.PopType == 2 && (
        <DetailLayoverComponent
          funcs={funcs}
          item={selectedItem}
        ></DetailLayoverComponent>
      )}
      {props.PopType == 3 && (
        <CreateItemComponent funcs={funcs}></CreateItemComponent>
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
      PopType: 2,
      selectedItem: {
        type: "Request",
        obj: {},
      },
    };
    this.funcs = {
      needLogin: this.needLogin,
      setLogin: this.setLogin,
      displayLogin: this.displayLogin,
      displayCreate: this.displayCreate,
      logout: this.logout,
      displayDetail: this.displayDetail,
    };
  }

  /// this function will be passed to panelItem.
  displayDetail = (obj) => {
    this.state.selectedItem.obj = obj;
    this.setState({ selectedItem: this.state.selectedItem });
    if (this.state.PopType == 2) {
      this.setState({ PopType: 0 });
    } else {
      this.setState({ PopType: 2 });
    }
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
    if (this.state.PopType == 1) {
      this.setState({ PopType: 0 });
    } else {
      this.setState({ PopType: 1 });
    }
  };

  displayCreate = (value) => {
    if (this.state.PopType == 3) {
      this.setState({ PopType: 0 });
    } else {
      this.setState({ PopType: 3 });
    }
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
    return (
      <AppDisplay
        userInfo={this.state.user}
        funcs={this.funcs}
        PopType={this.state.PopType}
        selectedItem={this.state.selectedItem}
      />
    );
  }
}

export default App;
