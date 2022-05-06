import "../App.css";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import { makeStyles, Grid } from "@material-ui/core";
import svg1 from "../svg/svg1.svg";
import svg2 from "../svg/svg2.svg";
import svg3 from "../svg/svg3.svg";
import movie_svg from "../svg/movie_svg.svg";
import "./Home.css";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  home: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className="top-content">
        <div className="left-side">
          <div className="left-content">
            <h1 className="title">MovieZ</h1>
            <span className="tagline">To entertain You.</span>
            <img className="svg1" src={svg1} alt="" />
            <img className="svg2" src={svg2} alt="" />
            <img className="svg3" src={svg3} alt="" />
          </div>
        </div>
        <div className="right-side">
          <img className="side-svg" src={movie_svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
