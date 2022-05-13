import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import logo from "../svg/logo.svg";
import menu from "../images/menu.png";

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
  const [showMenu, setshowMenu] = useState(true);
  const showMenuFunc = () => {
    if (showMenu) {
      setshowMenu(false);
    } else {
      setshowMenu(true);
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
        <div
          className="nav-links"
          style={
            showMenu ? { maxHeight: "130px", display: "flex" } : { maxHeight: "0", display: "none" }
          }
        >
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

        <img
          onClick={showMenuFunc}
          className="menu"
          style={{ width: "25px" }}
          src={menu}
          alt="menu"
        />
      </div>
    </div>
  );
};

export default NavBar;
