import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
// The below components will be created shortly
import Login from "../Login/Login";
import Groupchat from "../Groupchat/Groupchat";
import * as chat from "../../lib/chat";

const App = (props) => {
  
  chat.init();

  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/chat" component={Groupchat} />
    </Switch>
  );
}

export default App;
