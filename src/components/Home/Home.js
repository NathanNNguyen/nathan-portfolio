import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';

import styles from './Home.module.scss';

function Home() {
  return (
    <Wrapper>
      <div className={styles.home}>
        <div className={styles.textArea}>
          <div className={styles.summary}>
            <h1>Hi,
              <br />
              my name is Nathan Nguyen,
              <br />
              web developer.
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
