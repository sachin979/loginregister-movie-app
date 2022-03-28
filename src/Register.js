import { Grid, Box, makeStyles, TextField, Button, Paper, Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import bg1 from "./images/bg1.jpg";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "88vh",
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
  },

  left: {
    backgroundColor: "#62a8ac",
  },
  right: {
    padding: theme.spacing(2),
  },
}));

const Register = () => {
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
  const callApi = () => {
    if (Object.values(errObj).every((item) => item === false)) {
      console.log("before epi call");
      axios
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
        });
    }
  };

  const registerBtn = () => {
    if (!/^[a-zA-Z ]+$/.test(inputObj.fname)) {
      setErrobj({ ...errObj, fnameerr: true });
      console.log(errObj);
    } else if (!/^[a-zA-Z ]+$/.test(inputObj.lname)) {
      setErrobj({ ...errObj, lnameerr: true });
    } else if (!/^[a-zA-Z_0-9]+$/.test(inputObj.username)) {
      setErrobj({ ...errObj, usernameerr: true });
    } else if (!/^(?=.*[a-z])(?=.*[0-9]).{6,10}$/.test(inputObj.passw)) {
      setErrobj({ ...errObj, passwerr: true });
    } else if (inputObj.passw !== inputObj.confpassw) {
      setErrobj({ ...errObj, passwerr: true });
      setErrobj({ ...errObj, confpasswerr: true });
    }
    console.log(errObj);
    console.log(Object.values(errObj).every((item) => item === false));
    callApi();
  };
  return (
    <div>
      <NavBar />
      <Grid container className={classes.root} direction="column" justifyContent="center">
        <Grid item container justifyContent="center">
          <Grid item xs={6}>
            <Paper elevation={4}>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Box component="div" className={classes.spancl}>
                    <Typography className={classes.welcome} variant="h4">
                      Welcome to our Portal
                    </Typography>
                    <Typography variant="body1">Get Started</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={8}
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
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
