import React from 'react';
import styles from './HomePage.module.scss';


function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.welcome}>   
        <h1 className={styles.welcome__text}>Hi, I'm Brandon.</h1>
        <h1 className={styles.welcome__line}>Welcome to my portfolio</h1>
      </div>

      <div className={styles.aboutWrapper}>
        <div className={styles.About}>
          <h2>I am Software Developer with a love for Front-end development</h2>
          <p>
            Im very passionate about creating and designing programs from the ground up. My heart really lies in the
            front-end part of the development process. I love creating visually beautiful web applications.
          </p>
          <br />
          <p>
            In my free time, I love glass blowing, snowboarding, hiking, and anything that has to do with being outside.
          </p>
        </div>
      </div>
    </div>
  );
}



export default HomePage;
