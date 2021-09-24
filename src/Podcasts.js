import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import keys from './keys';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const { apiKey, proxy } = keys;
    async function fetchData() {
      try {
        const response = await fetch(
          `${proxy}https://listen-api.listennotes.com/api/v2/best_podcasts`,
          {
            headers: {
              'X-ListenAPI-Key': `${apiKey}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setPodcasts(data.podcasts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {podcasts.map((podcast) => (
            <Grid key={podcast.id} item xs={12} sm={6}>
              {/* <Paper className={classes.paper} elevation={3}> */}
              <Paper className={classes.paper} variant="outlined">
                <Typography component="h2" variant="h6" gutterBottom>
                  {podcast.title}
                </Typography>
                <Typography gutterBottom>by {podcast.publisher}</Typography>
                <img src={podcast.thumbnail} alt="" />
                <Typography align="left" gutterBottom>
                  {podcast.description}
                </Typography>
                <Typography paragraph>{podcast.country}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Podcasts;
