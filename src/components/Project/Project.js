import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';
import budget from '../../assets/images/budget.png';
import domImg from '../../assets/images/dom-game.png';
import moviesImg from '../../assets/images/movies.png';
import natoursImg from '../../assets/images/natours.png';
import youtube from '../../assets/images/youtube.png';
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
    name: 'Budget Tracker',
    github: 'https://github.com/NathanNNguyen/budget',
    live: 'https://nn-budget-tracker.now.sh',
    img: budget,
    desc: 'A simple expense tracker that allows user to track their expenses, data persists to local storage in need of keep using the app (React / Redux hook)'
  },
  {
    name: 'Roll The Dice',
    github: 'https://github.com/NathanNNguyen/DOM-Game',
    live: 'https://nn-rollthedice.netlify.app/',
    img: domImg,
    desc: 'A game that allows players taking turn to roll the dice. Players have the choice to either hold or keep rolling. Whoever hit 100 points first would win the game (DOM)'
  },
  {
    name: 'Movies API',
    github: 'https://github.com/NathanNNguyen/movies',
    live: 'https://nn-movies.now.sh/',
    img: moviesImg,
    desc: 'An app that allows users to search for movies and see informations about those movies (React / Redux)'
  },
  {
    name: 'Natours',
    github: 'https://github.com/NathanNNguyen/natours',
    live: 'https://nn-natours.netlify.app/',
    img: natoursImg,
    desc: 'A simple project to showcase front-end skills, implemented with lots of animations (HTML / CSS)'
  },
  {
    name: 'Youtube Clone',
    github: 'https://github.com/NathanNNguyen/youtube',
    live: 'https://nn-youtube.now.sh/',
    img: youtube,
    desc: 'Full stack project as a clone version of youtube. Users are allowed to register and log in to see the content (React / Node)'
  },

]
