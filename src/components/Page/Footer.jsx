import React from 'react';
import styles from './Footer.module.scss';
import GitHubLOGO from '../../assets/GitHub_LOGO.png';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <h3>
        Find All My Projects Here:
        <a href='https://github.com/BrandonF55'>
          <img className='GitHub' src={GitHubLOGO} alt='github logo' />
        </a>

      </h3>
    </footer>
  );
}

export default Footer;
