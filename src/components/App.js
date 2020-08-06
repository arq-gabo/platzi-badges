import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
