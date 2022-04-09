import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Movie from "../components/Movie";
import SingleMovie from "../components/SingleMovie";
const RoutesFunc = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/movies">
            <Movie />
          </Route>
          <Route path="/moviepage/:id">
            <SingleMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesFunc;
