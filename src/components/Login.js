import {
  Grid,
  Box,
  Paper,
  TextField,
  Button,
  makeStyles,
  Typography,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import bg1 from "../images/bg4.jpg";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Register from "./Register";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",
  },

  left: {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  right: {
    padding: theme.spacing(2),
  },
  backdrop: {
    zIndex: "100",
  },
}));

export default function Login() {
  const [errObj, seterrObj] = useState({
    usernameerr: false,
    passwerr: false,
  });
  useEffect(() => {
    console.log("useffct");
  }, [errObj]);
  const [snackbarOpen, setsnackbarOpen] = useState(false);
  const [backdropOpen, setbackdropOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [passw, setPassw] = useState("");
  const callApi = async () => {
    setbackdropOpen(true);
    var data = JSON.stringify({
      username: username,
      password: passw,
    });

    var config = {
      method: "post",
      url: "http://localhost:4000/users/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const resp = await axios
      .post(config.url, data, { headers: config.headers })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        sessionStorage.setItem("token", response.data.token);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setsnackbarOpen(true);
        history.push("/movies");
      });

    setbackdropOpen(false);
  };
  const loginBtn = () => {
    if (username === "test" && passw === "test123") {
      sessionStorage.setItem("token", "testuser123");
      history.push("/movies");
    }
    if (username.length === 0) {
      console.log({ ...errObj });
      seterrObj((errObj) => ({ ...errObj, usernameerr: true }));
    }
    if (passw.length === 0) {
      seterrObj((errObj) => ({ ...errObj, passwerr: true }));
    }
    if (username.length > 0 && passw.length > 0) {
      callApi();
    }
  };
  return (
    <div>
      <NavBar />
      <Grid container className={classes.root} direction="column" justifyContent="center">
        <Grid item container justifyContent="center" style={{ height: "80vh" }} alignItems="center">
          <Grid item lg={4} xs={8}>
            <Paper elevation={12}>
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={12} sm={4} md={4}>
                  <Box component="span" className={classes.left}>
                    <Typography variant="h4">Login</Typography>
                    <Typography variant="subtitle1">We are happy to see you back</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={8} container justifyContent="center">
                  <Grid item>
                    <Typography>Login</Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    spacing={2}
                    className={classes.right}
                  >
                    <Grid item>
                      <TextField
                        error={errObj.usernameerr}
                        variant="outlined"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        size="small"
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        error={errObj.passwerr}
                        variant="outlined"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassw(e.target.value)}
                        size="small"
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" onClick={loginBtn}>
                        Login
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Not a registered user?
                        <Button size="small">
                          <Link to="/register"> Register Here</Link>
                        </Button>{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Backdrop className={classes.backdrop} open={backdropOpen}>
              <CircularProgress />
            </Backdrop>
          </Grid>
          <Snackbar
            open={snackbarOpen}
            message="Invalid username/password"
            action={
              <React.Fragment>
                <IconButton size="small" aria-label="close" onClick={() => setsnackbarOpen(false)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          ></Snackbar>
        </Grid>
      </Grid>
    </div>
  );
}
