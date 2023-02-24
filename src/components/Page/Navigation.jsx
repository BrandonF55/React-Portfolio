import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to='/' alt='Home' title='Home'>
        Home
      </NavLink>
      <NavLink to='projects' alt='projects' title='projects'>
        Projects
      </NavLink>
      <NavLink to='contact' alt='contacts' title='contacts'>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
