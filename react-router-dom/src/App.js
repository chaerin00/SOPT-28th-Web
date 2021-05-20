import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

export default function App() {
  return (
    <>
      <div>header</div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/1?name=kim">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about" component={About} />

            <Route path="/:id" component={User} />

            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
