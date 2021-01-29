import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
