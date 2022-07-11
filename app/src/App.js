import React, { useState } from "react";
import Presentation from "./components/Presentation";
import Studies from "./components/Studies";
import Experience from "./components/Experience";
import Abilities from "./components/Abilities";
import Contact from "./components/Contact";
import "./app.css"


const name = "Ignacio Martinez"

function App() {

  return (
    <div className="App" >
        <Presentation />
        <Studies />
        <Experience />
        <Abilities />
        <Contact />
    </div>
  );
}

export default App;
