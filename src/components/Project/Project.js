import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import covidImg from '../../assets/images/covid-tracker.png';
import domImg from '../../assets/images/dom-game.png';
import nasaImg from '../../assets/images/nasa.png';
import natoursImg from '../../assets/images/natours.png';
import omnifoodImg from '../../assets/images/omnifood.png';
import wljImg from '../../assets/images/wlj.png';

import styles from './Project.module.scss';

function Project() {
  return (
    <Wrapper>
      <div className={styles.project}>
        {projects.map((project, id) => {
          return (
            <div className={styles.card} key={id}>
              <div className={styles.front}>
                <h3>{project.name}</h3>
                <img src={project.img} alt='Project img' />
              </div>
              <div className={styles.back}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className={styles.links}>
                  <a href={project.live} target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-eye"></i>
                    <span>Live</span>
                  </a>
                  <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    <i className="fas fa-code"></i>
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  );
}

export default Project;

const projects = [
  {
    name: 'Weight Lift Journal',
    github: 'https://github.com/bw-wlj-2/Frontend',
    live: 'https://simply-fit.netlify.app/',
    img: wljImg,
    desc: 'An app that allows users to keep track of their personal workout routine. Users can update their journal if needed (React / Redux)'
  },
  {
    name: 'Covid-19 Tracker',
    github: 'https://github.com/NathanNNguyen/covid-tracker',
    live: 'https://nn-covid-tracker.now.sh/',
    img: covidImg,
    desc: 'An app that allows users to track real time data of COVID-19. Users can track whether it is global or countries based data (React)'
  },
  {
    name: 'Natours',
    github: 'https://github.com/NathanNNguyen/natours',
    live: 'https://nn-natours.netlify.app/',
    img: natoursImg,
    desc: 'A simple project to showcase front-end skills, implemented with lots of animations (HTML / CSS)'
  },
  {
    name: 'Nasa Photo of The Day',
    github: 'https://github.com/NathanNNguyen/nasa-photo-of-the-day',
    live: 'https://nn-nasa.netlify.app/',
    img: nasaImg,
    desc: 'A web app that allows users to see everyday photo of nasa including description for each photo (React)'
  },

  {
    name: 'Omnifood',
    github: 'https://github.com/NathanNNguyen/Omnifood',
    live: 'https://nn-omnifood.now.sh/',
    img: omnifoodImg,
    desc: 'A simple project to showcase front-end skills, implemented with lots of animations (HTML / CSS)'
  },
  {
    name: 'Roll The Dice',
    github: 'https://github.com/NathanNNguyen/DOM-Game',
    live: 'https://nn-rollthedice.netlify.app/',
    img: domImg,
    desc: 'A game that allows players taking turn to roll the dice. Players have the choice to either hold or keep rolling. Whoever hit 100 points first would win the game (DOM)'
  }
]
