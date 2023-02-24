import React from "react";
import styles from './HomePage.module.scss';

function HomePage(){
  return(
    <div className={styles.HomePage}>
    <div className={styles.HelloThere}></div>

    <h1>Hey, My Name is Brandon Fenk</h1>
    <h1> Welcome to my Portfolio</h1>

    <h2>I am Junior Software Developer in the making</h2>
    <p>
      Im very passionate about creating and deigning programs from the ground up. My Heart really lies in the Front-end part of the application process. Love Designing features the users can see and interact with.
    </p>
    <br />
    <br />
    <p>In my free time, I love to glass blowing, Snowboarding, hiking, and anything that has to do with being outside.</p>
    </div>
  );
}


export default HomePage;