import React from "react";
import logo from "../../logo.png";

function AppHeader() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 id="header-parkeasy">
        P<small>ARK'EASY</small>
      </h2>
    </header>
  );
}

export default AppHeader;
