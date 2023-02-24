import React from "react";
import styles from './Header.module.scss'
import Navigation from '../Navigation'


function Header(){
  return (
    <header className={styles.Header}>
      <Navigation/>
    </header>
  );
} 
export default Header;