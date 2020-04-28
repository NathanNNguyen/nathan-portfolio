import React from 'react';
import Wrapper from '../Wrapper/Wrapper.js';

import styles from './Contact.module.scss';

function Contact() {
  return (
    <Wrapper>
      <div className={styles.contact}>
        <div className={styles.textArea}>
          <h2>Contact me</h2>
          <p>Feel free to contact me if you have any question</p>
        </div>
        <form method="POST" action="https://formspree.io/natenguyen51294@gmail.com">
          <div>
            <div className={styles.input}>
              <input type="text" name="name" placeholder="Name" />
              <span />
            </div>
            <div className={styles.input}>
              <input type="email" required name="email" placeholder="Email" />
              <span />
            </div>
          </div>
          <div>
            <div className={styles.input}>
              <input type="text" name="subject" placeholder="Subject" />
              <span />
            </div>
          </div>
          <div>
            <div className={styles.input}>
              <textarea type="text" required name="message" placeholder="Message" />
              <span />
            </div>
          </div>
          <button className={styles.submit} type="submit">
            Send
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contact;
