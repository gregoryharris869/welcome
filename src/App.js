// import React from "react";
// import { Route } from "react-router-dom";

// import Navigation from "./components/navigation/Navigation";
// import Welcome from "./components/welcome/Welcome";
// import Clock from "./components/clock/Clock";
// import Contact from "./components/contact/Contact";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Navigation />

//       <Route exact path="/" render={() => <Welcome name="Greg" />} />

//       <Route path="/contact" component={Contact} />
//       <Route path="/clock" component={Clock} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Page404 from "./components/page404/Page404";

function App() {
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
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
