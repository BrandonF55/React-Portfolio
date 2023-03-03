import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.scss';

function ProjectNavigation() {
  return (
  
    <nav className={styles.ProjectList}>
 
      <Link to="sillystringfactor" alt="SillyStringFactor" title="StillyStringFactor">
        <h1><u>Silly String Factory</u></h1>
        <h4></h4>
      </Link>

      <Link to="gallerygram" alt="GalleryGram" title="GalleryGram">
        <h1><u>Gallery Gram</u></h1>
        <h4></h4>
      
      </Link>
    
    </nav>
  

  );
}

export default ProjectNavigation;
