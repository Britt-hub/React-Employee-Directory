import React from "react";
import Main from "./Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/header";
import Index from "../index";

import "./app.css";

function app() {
  return (
    <div className="app">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default app;