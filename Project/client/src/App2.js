import './App.css';
import HomePage from "/Users/Shani/mern-todo-app/Project/server/home";
import Page1 from "/Users/Shani/mern-todo-app/Project/server/page1";
import Page2 from "/Users/Shani/mern-todo-app/Project/server/page2";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact>
                  <HomePage />
              </Route>
              <Route path="/page1">
                  <Page1 />
              </Route>
              <Route path="/page2">
                  <Page2 />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;


