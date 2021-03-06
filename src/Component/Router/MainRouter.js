import React from "react";
import "./css/route.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Todo/Home";
import Counter from "../Counter/Counter";
import DeveloperDetails from "../Todo/DeveloperDetails";
import DevelopersList from "../Todo/DevelopersList";
import JsPractice from "../JsPractice/JsPractice";

const MainRouter = () => {
  const style = {
    nav: {
      display: "flex",
      justifyContent: "flex-start",
      listStyle: "none",
      backgroundColor: "red",
    },
    li: {
      paddingRight: "10px",
    },
  };
  return (
    <Router>
      <div>
        <ul>
          <li style={style.nav} s>
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
