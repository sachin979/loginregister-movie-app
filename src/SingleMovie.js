import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Grid, Box, Typography, makeStyles, Chip } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  movietext: {
    paddingTop: "15px",
  },
  chip: {
    marginRight: "10px",
  },
  imag: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ratingContainer: {
    display: "flex",
  },
  ratingleft: {
    minWidth: "125px",
  },
  ratingright: {
    minWidth: "125px",
  },
}));

function SingleMovie() {
  const classes = useStyles();
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
          <Grid container direction="row" justifyContent="center">
            <Grid item sm={5}>
              <img
                src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
                alt="poster"
                className={classes.imag}
              />
            </Grid>
            <Grid
              container
              item
              direction="column"
              justifyContent="space-evenly"
              sm={7}
              style={{ textAlign: "left" }}
            >
              <div>
                <Typography className={classes.movietext} variant="h5">
                  {movieDetails.original_title}
                </Typography>
                <Typography className={classes.movietext} variant="caption">
                  {movieDetails.tagline}
                </Typography>
              </div>
              <Typography className={classes.movietext}>
                Released On: {movieDetails.release_date}
              </Typography>

              <Typography
                className={classes.movietext}
                variant="subtitle1"
                style={{ paddingTop: 20, paddingBottom: 20 }}
              >
                Overview:{movieDetails.overview}
              </Typography>
              <div className={classes.ratingContainer}>
                <Box className={classes.ratingleft}>Ratings</Box>
                <Box className={classes.ratingright}>{movieDetails.vote_average}⭐</Box>
              </div>
              <div className={classes.ratingContainer}>
                <Box className={classes.ratingleft}>No. of Votes:</Box>
                <Box className={classes.ratingright}>{movieDetails.vote_count}</Box>
              </div>
              <Box className={classes.movietext}>
                {movieDetails.genres.map((gen) => {
                  return (
                    <Chip key={gen.id} label={gen.name} color="primary" className={classes.chip} />
                  );
                })}
              </Box>
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
