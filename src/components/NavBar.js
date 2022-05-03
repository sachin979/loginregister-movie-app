import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import logo from "../svg/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
    textAlign: "left",
  },
}));
const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const loginout = () => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.setItem("token", "");
      history.push("/");
    } else {
      history.push("/login");
    }
  };
  return (
    <div style={{ paddingBottom: "10px" }}>
      <div className="navbar">
        <Link to="/" className={classes.logo} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={logo} alt="" />
            <span>MovieZ</span>
          </div>
        </Link>
        <div className="nav-links">
          <Button style={{ fontWeight: 600, marginRight: "20px" }} className="nav-button">
            Discover
          </Button>
          <Button style={{ fontWeight: 600, marginRight: "20px" }} className="nav-button">
            Popular
          </Button>
          <Button
            style={{ fontWeight: 600, marginRight: "20px" }}
            className="nav-button"
            onClick={loginout}
          >
            {sessionStorage.getItem("token") ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
