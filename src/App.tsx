import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./view/main";
import Mbti from "./view/mbti";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mbti" exact component={Mbti} />
      </Switch>
    </Router>
  );
}

export default App;
