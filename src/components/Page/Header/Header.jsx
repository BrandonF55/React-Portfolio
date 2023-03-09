import React from "react";
import styles from './Header.module.scss'
import Navigation from '../Navigation'
import ThemeButton from "./ThemeButton";


function Header() {
  return (
    <header className={styles.Header}>
      <Navigation />
      {/* <ThemeButton/>        */}
    </header>
  );
}
export default Header;