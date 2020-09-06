import React from "react";
import ReadingRoom from "./reading-room";
import { Route } from "react-router";
import Switch from "react-bootstrap/esm/Switch";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ReadingRoom />
      </Route>
      <Route path="/tuk" exact>
        TUK (placeholder temporario para proximas rotas)
      </Route>
    </Switch>
  );
};

export default App;
