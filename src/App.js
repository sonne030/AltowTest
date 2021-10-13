
import React from 'react';

import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Profile } from "./components/pages/Profile";
import { Search } from "./components/pages/Search";
import { Conversations } from "./components/pages/Conversations";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/conversations" component={Conversations} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
