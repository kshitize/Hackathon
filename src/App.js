import React, { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Adminpage from "./components/Adminpage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/Adminpage" component={Adminpage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
