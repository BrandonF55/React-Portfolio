import React from 'react';
import styles from './HomePage.module.scss';


function HomePage() {
  return (

    
    <div className={styles.HomePage}>

      <div className={styles.welcome}>   
        <h1 className={styles.welcome__line}>Welcome To my portfolio</h1>
        <h1 className={styles.welcome__text}>Hi, I'm Brandon.</h1>
      </div>
      
      <div className={styles.About}>
        <h2>I am Junior Software Developer with a love for the Front-end</h2>
        <p>
          Im very passionate about creating and designing programs from the ground up. My heart really lies in the
          front-end part of the application process. I love designing features that users can see and interact with.
        </p>
        <br />
        <p>
          In my free time, I love glass blowing, snowboarding, hiking, and anything that has to do with being outside.
        </p>
      </div>
    </div>
  );
  }


export default HomePage;
