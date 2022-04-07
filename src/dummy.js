.then((res) => {
    console.log(res);
    setOpen(true);
  })
  .catch((err) => {
    setSnackMsg("Something went wrong!");
    setOpen(true);
  })

  <Link to="/login">
  <Typography variant="body2">Sign In</Typography>
</Link>


<Grid item lg={3} key={mv.id} spacing={4}>
<Card>
  <img src={img_url} />
  <Grid container direction="row" justifyContent="space-between">
    <Grid item style={{ textAlign: "left" }}>
      <Typography variant="subtitle">{mv.original_title}</Typography>
      <Typography variant="body2">{mv.release_date}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2">{mv.vote_average}⭐</Typography>
    </Grid>
  </Grid>
</Card>
</Grid>

/*{movieDetails ? (
        <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="poster" />
      ) : (
        ""
      )}*/