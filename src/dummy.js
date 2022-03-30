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