import { Grid, Box, Paper, TextField, Button, makeStyles, Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import bg1 from "./images/bg1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
  },

  left: {
    backgroundImage: `url(${bg1})`,
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  right: {
    padding: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [passw, setPassw] = useState("");
  const loginBtn = () => {
    console.log("login");
    console.log(username);
    console.log(passw);
    var data = JSON.stringify({
      username: username,
      password: passw,
    });
    console.log(data);

    var config = {
      method: "post",
      url: "http://localhost:4000/users/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .post(config.url, data, { headers: config.headers })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/movies");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar />
      <Grid container className={classes.root} direction="column" justifyContent="center">
        <Grid item container justifyContent="center">
          <Grid item xs={6}>
            <Paper elevation={12}>
              <Grid container direction="row" justifyContent="center">
                <Grid item xs={4}>
                  <Box component="span" className={classes.left}>
                    <Typography variant="h4">Login</Typography>
                    <Typography variant="subtitle1">We are happy to see you back</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8} container justifyContent="center">
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
                        variant="outlined"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        size="small"
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassw(e.target.value)}
                        size="small"
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <Button color="primary" variant="contained" onClick={loginBtn}>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
