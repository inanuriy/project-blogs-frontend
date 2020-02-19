import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
