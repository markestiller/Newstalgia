import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="fullpage">
        <div className="page">
          <Page/>
        </div>
        <div className="navbar">
          <NavBar/>
        </div>
      </div>
    </>
  );
}

export default App;
