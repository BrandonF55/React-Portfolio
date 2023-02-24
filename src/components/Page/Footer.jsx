import React from 'react';
import styles from './Footer.module.scss';
import GitHubLOGO from '../../assets/GitHub_LOGO.png';

function Footer() {
  return (
    <Footer className={styles.Footer}>
      <h3>
        Find All My Projects Here:
        <a href='https://github.com/BrandonF55' />
        <img className='GitHub' src={GitHubLOGO} alt='' />
      </h3>
    </Footer>
  );
}

export default Footer;
