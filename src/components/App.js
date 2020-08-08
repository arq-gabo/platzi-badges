import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import BadgeDetails from "../pages/BadgeDetails";
import BadgeEdit from "../pages/BadgeEdit";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId" component={BadgeDetails} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
