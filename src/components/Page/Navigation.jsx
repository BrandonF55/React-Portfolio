import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div>
    
    <nav className={styles.Navigation}>
      
      <NavLink to='/' alt='Home' title='Home'>
        Home
      </NavLink>
      <NavLink to='projects' alt='projects' title='Projects'>
        Projects
      </NavLink>
      <NavLink to='contact' alt='contacts' title='Contacts'>
        Contacts
      </NavLink>
    </nav>
    </div>
  );
}

export default Navigation;
