import React, { useState } from "react";
import "./App.css";
import { ContentBody } from "./components/contentBody/ContentBody";
import { Header } from "./components/header/Header";
import { Modal } from "./components/modal/Modal";
import { useGlobalContext } from "./context";

function App() {
  const {slideOn } = useGlobalContext()

  return (
    <div className="App">
      <div className={` ${slideOn ? "darkForSlide" : ""}`}>
        <Header  />
        <ContentBody />
        <Modal />
      </div>
    </div>
  );
}

export default App;
