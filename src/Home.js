import "./App.css";
import Button from "@material-ui/core/Button";
import Routes from "./Routes";
import Login from "./Login";
import NavBar from "./NavBar";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.home}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button color="primary" variant="contained" href="\register">
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" href="\login">
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
