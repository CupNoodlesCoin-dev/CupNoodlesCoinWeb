import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChineseApp from './chinese';
import EnglishApp from './english';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/en">
            <EnglishHome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return <ChineseApp />;
}

function EnglishHome() {
  return <EnglishApp />;
}
