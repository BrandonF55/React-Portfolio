import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.scss';

function ProjectNavigation() {
  return (
  
    <nav className={styles.ProjectList}>
      <hr />
      <Link to="sillystringfactor" alt="SillyStringFactor" title="StillyStringFactor">
        <h1>Silly String Factory</h1>
        <h4></h4>
      </Link>

      <Link to="gallerygram" alt="GalleryGram" title="GalleryGram">
        <h1>Gallery Gram </h1>
        <h4></h4>
      </Link>
      <hr />
    </nav>

  );
}

export default ProjectNavigation;
