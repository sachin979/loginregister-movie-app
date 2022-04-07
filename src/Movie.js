import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useHistory, Link as RouteLink } from "react-router-dom";
import { Card, Grid, Paper, Box, Typography, Badge, Container, Link } from "@material-ui/core";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  var api =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&sort_by=popularity.desc&include_adult=false" +
    "&page=" +
    page;

  const history = useHistory();
  const callApi = async () => {
    const resp = await axios.get(api).then((res) => {
      setMovies(res.data.results);
      console.log(res.data);
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      history.push("/login");
    } else {
      callApi();
    }
  }, []);
  useEffect(() => {
    callApi();
  }, [page]);
  const setPageno = (p) => {
    setPage(p);
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" style={{ paddingTop: "15px" }}>
        <Grid container justifyContent="center" spacing={2}>
          {movies
            ? movies.map((mv) => {
                var img_url = "https://image.tmdb.org/t/p/w185" + mv.poster_path;
                return (
                  <Grid item md={3} key={mv.id}>
                    <Badge badgeContent={mv.vote_average + "⭐"} color="error">
                      <Card raised={false} style={{ width: "200px", height: "360px" }}>
                        <RouteLink to={`/moviepage/${mv.id}`}>
                          <img src={img_url} />
                        </RouteLink>
                        <Grid container direction="row" justifyContent="space-between">
                          <Grid item style={{ textAlign: "left" }}>
                            <Typography variant="subtitle1" style={{ padding: "0 7px" }}>
                              {mv.original_title}
                            </Typography>
                            <Typography variant="body2" style={{ padding: "0 7px" }}>
                              {mv.release_date}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Badge>
                  </Grid>
                );
              })
            : ""}
        </Grid>
        <Grid container justifyContent="center" style={{ padding: "20px 0" }}>
          <Grid item>
            <Pagination
              count={10}
              color="primary"
              page={page}
              onChange={(e, page) => setPageno(page)}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Movie;
