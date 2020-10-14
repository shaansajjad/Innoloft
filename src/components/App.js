import React from "react";
import Navigation from "./navigation/Navigation";
import Home from "./Home/Home";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
