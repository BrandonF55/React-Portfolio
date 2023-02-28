import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.scss';

function ProjectNavigation() {
  return (
    <nav className={styles.ProjectList}>
      <Link>
        <h4>Silly String Factory</h4>
        <h1> C# Application</h1>
      </Link>

      <Link>
        <h4>Gallery Gram</h4>
        <h1> C# Application for Team Week At Epicodus</h1>
      </Link>
    </nav>
  );
}

export default ProjectNavigation;
