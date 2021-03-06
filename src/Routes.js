import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Movie from "./Movie";
import SingleMovie from "./SingleMovie";
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
