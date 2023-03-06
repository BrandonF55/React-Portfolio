import React from 'react';
import styles from './Footer.module.scss';
import GitHubLOGO from '../../assets/GitHub-Mark.png';
import MyComponent from '../Effect'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <h3>Find My Recent Work Here:</h3>
        <a href='https://github.com/BrandonF55'>
          <img className={styles.GitHub} src={GitHubLOGO} alt='github logo' />
        </a>
      </div>
      {/* <MyComponent/> */}
    </footer>
  );
}

export default Footer;
