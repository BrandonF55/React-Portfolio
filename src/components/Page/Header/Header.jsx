import React from "react";
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import ThemeButton from "./ThemeButton";


function Header() {
  return (
    <header className={styles.Header}>
      <Navigation />
      {/* <ThemeButton/>   if you remove this comment the toggle button will appear in the navigation bar. */}
    </header>
  );
}
export default Header;