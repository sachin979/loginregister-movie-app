import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

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
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Link to="/" className={classes.logo} style={{ textDecoration: "none", color: "white" }}>
            <Typography>Login & Register</Typography>
          </Link>
          <Button color="inherit" onClick={loginout}>
            {sessionStorage.getItem("token") ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
