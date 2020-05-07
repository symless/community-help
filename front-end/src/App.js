import React from "react";

import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent } from "./components/Panel";
import { Task } from "./components/Task";

function App() {
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

export default App;
