import React from "react";
import { Button } from "./components/Button";
import "./App.scss";
import { Panel, PanelTitle, PanelContent, PanelContainer } from "./components/Panel";

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
        <PanelContainer fetchEndpoint="localhost:3003" fetchEndpoint="localhost:3003" title="Helpers Panel" color="blue"></PanelContainer>
        <PanelContainer fetchEndpoint="localhost:3003" fetchEndpoint="localhost:3003" title="Helpers Panel" color="purple"></PanelContainer>
      </div>
    </div>
  );
}

export default App;
