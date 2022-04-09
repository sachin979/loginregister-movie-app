import {
  Grid,
  Box,
  makeStyles,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import NavBar from "./NavBar";
import bg1 from "./images/bg4.jpg";
import React, { useState } from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "88vh",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  spancl: {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // margin: 'auto',
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },

  left: {
    backgroundColor: "#62a8ac",
  },
  right: {
    padding: theme.spacing(2),
  },
}));

const Register = () => {
  const [SnackMsg, setSnackMsg] = useState("");
  const [backdropOpen, setbackdropOpen] = useState(false);
  const [snackbarOpen, setsnackbarOpen] = useState(false);
  const config = {
    url: "http://localhost:4000/users/register",
    headers: {
      "Content-type": "application/json",
    },
  };
  const [inputObj, setInputobj] = useState({
    fname: "",
    lname: "",
    username: "",
    passw: "",
    confpassw: "",
  });
  const onChangeinp = (e) => {
    setInputobj({ ...inputObj, [e.target.name]: e.target.value });
    var err = e.target.name + "err";
    setErrobj({ ...errObj, [err]: false });
  };

  const [errObj, setErrobj] = useState({
    fnameerr: false,
    lnameerr: false,
    usernameerr: false,
    passwerr: false,
    confpasswerr: false,
  });

  const classes = useStyles();
  const callApi = async () => {
    setbackdropOpen(true);
    console.log("before epi call " + snackbarOpen);
    const resp = await axios
      .post(
        config.url,
        {
          firstName: inputObj.fname,
          lastName: inputObj.lname,
          username: inputObj.username,
          password: inputObj.passw,
        },
        { headers: config.headers }
      )
      .then((res) => {
        console.log(res);
        setSnackMsg("Registered Successfully!");
        setInputobj({
          fname: "",
          lname: "",
          username: "",
          passw: "",
          confpassw: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setSnackMsg("Something went wrong!");
      });
    //console.log(resp.data);
    setbackdropOpen(false);
    setsnackbarOpen(true);
  };

  const registerBtn = () => {
    var errFlag = false;
    var localErrObj = {
      fnameerr: false,
      lnameerr: false,
      usernameerr: false,
      passwerr: false,
      confpasswerr: false,
    };
    if (!/^[a-zA-Z ]+$/.test(inputObj.fname)) {
      localErrObj.fnameerr = true;
      setErrobj((errObj) => ({ ...errObj, fnameerr: true }));
      errFlag = true;
    }
    if (!/^[a-zA-Z ]+$/.test(inputObj.lname)) {
      localErrObj.lnameerr = true;
      setErrobj((errObj) => ({ ...errObj, lnameerr: true }));
      errFlag = true;
    }
    if (!/^[a-zA-Z_0-9]+$/.test(inputObj.username)) {
      localErrObj.usernameerr = true;
      setErrobj((errObj) => ({ ...errObj, usernameerr: true }));
      errFlag = true;
    }
    if (!/^(?=.*[a-z])(?=.*[0-9]).{6,10}$/.test(inputObj.passw)) {
      setErrobj((errObj) => ({ ...errObj, passwerr: true }));
      localErrObj.passwerr = true;
      errFlag = true;
    }
    if (inputObj.passw !== inputObj.confpassw || inputObj.confpassw === "") {
      localErrObj.passwerr = true;
      localErrObj.confpasswerr = true;
      setErrobj((errObj) => ({ ...errObj, confpasswerr: true }));
      setErrobj((errObj) => ({ ...errObj, passwerr: true }));

      errFlag = true;
    }
    /* setErrobj({
      fnameerr: localErrObj.fnameerr,
      lnameerr: localErrObj.lnameerr,
      usernameerr: localErrObj.usernameerr,
      passwerr: localErrObj.passwerr,
      confpasswerr: localErrObj.confpasswerr,
    });*/
    if (errFlag === false) {
      callApi();
    }
    console.log(errObj);
  };

  return (
    <div>
      <NavBar />

      <Grid container className={classes.root} direction="column" justifyContent="center">
        <Grid item container justifyContent="center">
          <Grid item md={6} sm={8} xs={12}>
            <Paper elevation={4}>
              <Grid container direction="row">
                <Grid item xs={12} sm={4} md={4}>
                  <Box component="div" className={classes.spancl}>
                    <Typography className={classes.welcome} variant="h4">
                      Welcome to our Portal
                    </Typography>
                    <Typography variant="body1">Get Started</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={8}
                  container
                  direction="column"
                  spacing={2}
                  className={classes.right}
                >
                  <Grid item>
                    <Typography varint="h1">Register</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="fname"
                      value={inputObj.fname}
                      error={errObj.fnameerr}
                      variant="outlined"
                      label="First Name"
                      onChange={onChangeinp}
                      size="small"
                      helperText={errObj.fnameerr ? "Invalid Name" : ""}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="lname"
                      value={inputObj.lname}
                      error={errObj.lnameerr}
                      variant="outlined"
                      label="Last Name"
                      onChange={onChangeinp}
                      size="small"
                      helperText={errObj.lnameerr ? "Invalid Name" : ""}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="username"
                      value={inputObj.username}
                      error={errObj.usernameerr}
                      variant="outlined"
                      label="Username"
                      onChange={onChangeinp}
                      size="small"
                      helperText={errObj.usernameerr ? "Invalid Username" : ""}
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="passw"
                      value={inputObj.passw}
                      error={errObj.passwerr}
                      variant="outlined"
                      label="Password"
                      onChange={onChangeinp}
                      size="small"
                      helperText={errObj.passwerr ? "Weak Password" : ""}
                      type="password"
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="confpassw"
                      value={inputObj.confpassw}
                      error={errObj.confpasswerr}
                      variant="outlined"
                      label="Confirm Password"
                      onChange={onChangeinp}
                      size="small"
                      helperText={errObj.confpasswerr ? "Password does not match" : ""}
                      type="password"
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <Button color="primary" variant="contained" onClick={registerBtn}>
                      Register
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Already registered?{" "}
                      <Button size="small">
                        <Link to="/login"> Login Here</Link>
                      </Button>{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Backdrop className={classes.backdrop} open={backdropOpen}>
              <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar
              open={snackbarOpen}
              message={SnackMsg}
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setsnackbarOpen(false)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            ></Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
