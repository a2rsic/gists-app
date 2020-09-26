import React from "react";
import { Route } from "react-router-dom";

import Header from "./common/header/Header";
import GistsPage from "./components/gists/GistsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={GistsPage} />
    </div>
  );
}

export default App;
