import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Page404 from "./components/page404/Page404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Switch>
          <Route
            path="/welcome/:name"
            render={(props) => (
              <Welcome {...props} name={props.match.params.name} />
            )}
          />

          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Greg" />}
          />

          <Route path="/Clock" component={Clock} />
          <Route path="/Contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
