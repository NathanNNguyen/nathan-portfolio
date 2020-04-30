import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';

import styles from './Home.module.scss';

function Home() {
  return (
    <Wrapper>
      <div className={styles.home}>
        <div className={styles.textArea}>
          <div className={styles.summary}>
            <h1>
              <span className={styles.zero}>
                Hi,
                </span>
              <br />
              <span className={styles.one}>
                my name is Nathan Nguyen,
              </span>
              <br />
              <span className={styles.two}>
                web developer.
              </span>
            </h1>
            <p className={styles.title}>
              Fullstack Developer - HTML / CSS / JavaScript / React / NodeJS
          </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
