import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Grid, Box, Typography } from "@material-ui/core";

import NavBar from "./NavBar";

function SingleMovie() {
  const { id } = useParams();
  const [movieDetails, setmovieDetails] = useState();
  var api =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  console.log(api);
  useEffect(() => {
    const resp = axios.get(api).then((res) => {
      console.log(res.data);
      setmovieDetails(res.data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Container maxWidth="md" style={{ backgroundColor: "#CCC9DC" }}>
        {movieDetails ? (
          <Grid container direction="row">
            <Grid item md={4}>
              <img
                src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
                alt="poster"
              />
            </Grid>
            <Grid item md={8}>
              <Typography>{movieDetails.original_title}</Typography>
              <Typography>{movieDetails.status}</Typography>
              <Typography>{movieDetails.tagline}</Typography>
              <Typography>{movieDetails.vote_average}</Typography>
              <Typography>{movieDetails.vote_count}</Typography>
              <Typography>{movieDetails.overview}</Typography>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

export default SingleMovie;
