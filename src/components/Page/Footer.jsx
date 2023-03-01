import React from 'react';
import styles from './Footer.module.scss';
import GitHubLOGO from '../../assets/GitHub-Mark.png';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <h3>Find All My Projects Here:</h3>
        <a href='https://github.com/BrandonF55'>
          <img className={styles.GitHub} src={GitHubLOGO} alt='github logo' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
