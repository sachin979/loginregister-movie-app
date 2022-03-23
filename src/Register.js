import { Grid, makeStyles, TextField, Button } from "@material-ui/core";
import NavBar from "./NavBar";
import bg1 from "./images/bg1.jpg";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: "1",
  },
  left: {
    backgroundColor: "#62a8ac",
  },
  right: {
    backgroundColor: "#5497a7",
  },
});

const Register = () => {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [passw, setPassw] = useState("");
  const registerBtn = () => {
    console.log("Button clicked");
    console.log(fname);
    console.log(lname);
    console.log(username);
    console.log(passw);
  };
  return (
    <div>
      <NavBar />
      <Grid container classname={classes.root}>
        <Grid item lg="5" className={classes.left}>
          <img src={bg1} alt="bg-image" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item lg="7" className={classes.right}>
          <TextField label="First Name" onChange={(e) => setFname(e.target.value)}></TextField>
          <TextField label="Last Name" onChange={(e) => setLname(e.target.value)}></TextField>
          <TextField label="Username" onChange={(e) => setUsername(e.target.value)}></TextField>
          <TextField label="Password" onChange={(e) => setPassw(e.target.value)}></TextField>
          <Button color="primary" onClick={registerBtn}>
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
