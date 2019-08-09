import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />
    <div className="content">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </div>
);

export default App;
