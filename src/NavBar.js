import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography>Login & Register</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
