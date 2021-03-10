import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Myprofile from "./Pages/MyProfile/MyProfile";
import FeedStory from "./Pages/FeedStory/FeedStory";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/myprofile" component={Myprofile} />
        <Route exact path="/feedstory" component={FeedStory} />
      </Switch>
    </Router>
  );
}

export default Routes;
