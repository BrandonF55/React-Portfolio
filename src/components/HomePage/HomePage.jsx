import React from 'react';
import styles from './HomePage.module.scss';


function HomePage() {
  return (
    <div className={styles.HomePage}>
      <hr />
      <div className={styles.welcome}>
        <h1 className={styles.welcome__text}>Hi, I'm Brandon</h1>
        <h1 className={styles.welcome__line}>Welcome To My Portfolio.</h1>
      </div>
      <hr />

      <div className={styles.aboutWrapper}>
        <div className={styles.About}>
          <h2>I am Software Developer with a love for Front-end development:</h2>
          <p>
            My passion lies in crafting and designing programs from the ground up, with a particular focus on the front-end development process. There's nothing quite like the feeling of bringing a visually stunning web application to life! From the colors and typography to the layout and user interface, I pour my heart into creating truly beautiful and engaging experiences for users. It's an incredibly rewarding process that keeps me motivated and inspired every step of the way..
          </p>
          <br />
          <p>
          Outside of work, I love adventure and the great outdoors. I enjoy skiing, hiking, and exploring new trails, and I find relaxation through the art of glass blowing. If I'm not coding, you can find me experiencing all that the world has to offer.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}



export default HomePage;
