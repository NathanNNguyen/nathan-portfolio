import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';

import styles from './About.module.scss';

function About() {
  return (
    <Wrapper>
      <div className={styles.about}>
        <h1>About me</h1>
      </div>
    </Wrapper>
  );
}

export default About;
