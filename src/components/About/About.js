import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';

import styles from './About.module.scss';

function About() {
  return (
    <Wrapper>
      <div className={styles.about}>
        <div className={styles.textArea}>
          <div className={styles.summary}>
            <h2>About me</h2>
            <p className={styles.text}>
              With a background of customer service, I'm looking to translate my customer relationship skills intomaking beautiful website for users.
              </p>
            <p className={styles.text}>
              I was introduced to coding recently and immediately fell in love with it. I started learning about code at Lambda School in October of 2019 then I apllied to be a TL and have been working in that role since March of 2020.
              </p>
            <p className={styles.text}>
              I enjoy writing code, especially code that can be easily understood by other developers. Knowing that every line of code is an opportunity to make a users' experience better, I wouldn't hesitate to take that
            chance to improve the users' experience.
            </p>
            <p className={styles.text}>
              I rarely define myself for the works that I've done but mostly for the works that I want to do. I love to keep learning, challenging myself and do things that matters to me the most. Technology is changing everyday, it's just the matter of fact how fast we can adapt to it.
              </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
