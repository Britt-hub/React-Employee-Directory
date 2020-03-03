import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/header";

import "./app.css";

function app() {
  return (
    <div className="app">
      <Wapper>
        <Header />
        <Main />
      </Wapper>
    </div>
  );
}

export default app;