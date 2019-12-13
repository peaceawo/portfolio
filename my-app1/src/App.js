import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />

      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
