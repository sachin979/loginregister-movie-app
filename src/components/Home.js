import "../App.css";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar";
import { makeStyles, Grid, Card } from "@material-ui/core";
import svg1 from "../svg/svg1.svg";
import svg2 from "../svg/svg2.svg";
import svg3 from "../svg/svg3.svg";
import movie_svg from "../svg/movie_svg.svg";
import axios from "axios";
import "./Home.css";
import { useState, useEffect } from "react";
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
  const [trendingData, settrendingData] = useState([]);
  const trendingApi =
    "https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.REACT_APP_API_KEY;
  const callTrendingApi = async () => {
    const data = await axios.get(trendingApi);
    console.log(data.data.results);
    settrendingData(data.data.results);
  };
  useEffect(() => {
    console.log("calling API");
    callTrendingApi();
  }, []);
  useEffect(() => {
    console.log(trendingData);
  }, [trendingData]);
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
      <div className="trending">
        {trendingData ? (
          trendingData.map((movie) => {
            var movieUrl = "https://image.tmdb.org/t/p/w185";
            return (
              <div className="card">
                <img
                  className="trendingImage"
                  key={movie.id}
                  src={movieUrl + movie.poster_path}
                  alt=""
                />
              </div>
            );
          })
        ) : (
          <div>Test</div>
        )}
      </div>
    </div>
  );
}

export default Home;
