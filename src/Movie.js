import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import { Card, Grid, Paper } from "@material-ui/core";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  var api = "https://api.themoviedb.org/3/discover/movie?api_key=" + process.env.REACT_APP_API_KEY;
  console.log(api);
  const history = useHistory();
  useEffect(() => {
    console.log(sessionStorage.getItem("token"));
    console.log(process.env.REACT_APP_API_KEY);
    if (sessionStorage.getItem("token") === null) {
      history.push("/login");
    } else {
      axios.get(api).then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        console.log(movies);
      });
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Grid container justifyContent="center" spacing={3}>
        {movies.map((mv) => {
          var img_url = "https://image.tmdb.org/t/p/w342" + mv.backdrop_path;
          return (
            <Grid item xs={3} key={mv.id}>
              <Card>
                <img src={img_url} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Movie;
