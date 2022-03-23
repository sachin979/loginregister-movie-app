import "./App.css";
import Button from "@material-ui/core/Button";
import Routes from "./Routes";
import Login from "./Login";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Button variant="contained" href="\register">
        Register
      </Button>
      <Button variant="contained" href="\login">
        Login
      </Button>
    </div>
  );
}

export default Home;
