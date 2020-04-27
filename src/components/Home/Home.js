import React from 'react';

import styles from './Home.module.scss';

function Home() {
  return (
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
  );
}

export default Home;
