import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Todo/Home";
import Counter from "../Counter/Counter";
import DeveloperDetails from "../Todo/DeveloperDetails";
import DevelopersList from "../Todo/DevelopersList";
import JsPractice from "../JsPractice/JsPractice";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="developers-list">Developers List</Link>
          </li>
          <li>
            <Link to="developer-details">Developer Details</Link>
          </li>
          <li>
            <Link to="counter">Conter</Link>
          </li>
          <li>
            <Link to="js-practise">JsPractice</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/developers-list" component={DevelopersList} />
        <Route path="/developer-details" component={DeveloperDetails} />
        <Route path="/counter" component={Counter} />
        <Route path="/js-practise" component={JsPractice} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
