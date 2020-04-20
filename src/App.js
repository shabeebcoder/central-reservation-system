import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropertyMapping from "./pages/propertyMapping/propertyMapping";
import SignUp from "./pages/signup";
import Sk from "./sks";
import Crs from "./crs";

export default function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Crs} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/property/registration"
            component={PropertyMapping}
          />
          <Route exact path="/skeleton" component={Sk} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
