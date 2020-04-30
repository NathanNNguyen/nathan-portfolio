import React from 'react';
import cx from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';

import covidImg from '../../assets/images/covid-tracker.png';
import domImg from '../../assets/images/dom-game.png';
import nasaImg from '../../assets/images/nasa.png';
import natoursImg from '../../assets/images/natours.png';
import omnifoodImg from '../../assets/images/omnifood.png';
import wljImg from '../../assets/images/wlj.png';

import styles from './Project.module.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    background: 'rgba(255, 255, 255, 0.7)',
    margin: '60px',
    boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.7)'
  },
  paper: {
    width: '100%',
    height: '100%'
  }
});

function Project() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  return (
    <div className={styles.project}>
      {projects.map((project, id) => {
        return (
          <Card className={cx(classes.root, styles.card)} key={id}>
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 1' }}
              {...(checked ? { timeout: 1500 } : 'Loading project...')}
            >
              <Paper elevation={4} className={classes.paper}>
                <img src={project.img} alt='Project img' />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.desc}
                  </Typography>
                </CardContent>
                <Button size="small" className={styles.btn}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-eye"></i>
                    <span className={styles.span}>Live</span>
                  </a>
                </Button>
                <Button size="small" className={styles.btn}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-code"></i>
                    <span className={styles.span}>Code</span>
                  </a>
                </Button>
              </Paper>
            </Grow>
          </Card>
        )
      })}
    </div>
  );
}

export default Project;

const projects = [
  {
    name: 'Weight Lift Journal',
    github: 'https://github.com/bw-wlj-2/Frontend',
    live: 'https://simply-fit.netlify.app/',
    img: wljImg,
    desc: 'An app that allows users to keep track of their personal workout (React/Redux)'
  },
  {
    name: 'Covid Tracker',
    github: 'https://github.com/NathanNNguyen/covid-tracker',
    live: 'https://nn-covid-tracker.now.sh/',
    img: covidImg,
    desc: 'An app that allows users to track real time data of COVID-19 (React)'
  },
  {
    name: 'Omnifood',
    github: 'https://github.com/NathanNNguyen/Omnifood',
    live: 'https://nn-omnifood.now.sh/',
    img: omnifoodImg,
    desc: 'A simple project to showcase frontend skills (HTML/CSS)'
  },
  {
    name: 'Nasa photo of the day',
    github: 'https://github.com/NathanNNguyen/nasa-photo-of-the-day',
    live: 'https://nn-nasa.netlify.app/',
    img: nasaImg,
    desc: 'An app that allows users to see nasa data everyday (React)'
  },
  {
    name: 'Natours',
    github: 'https://github.com/NathanNNguyen/natours',
    live: 'https://nn-natours.netlify.app/',
    img: natoursImg,
    desc: 'A simple project to showcase frontend skills (HTML/CSS)'
  },
  {
    name: 'Roll the dice',
    github: 'https://github.com/NathanNNguyen/DOM-Game',
    live: 'https://nn-rollthedice.netlify.app/',
    img: domImg,
    desc: 'A game allows players taking turn to roll the dice until one hits 100 points (DOM)'
  }
]
