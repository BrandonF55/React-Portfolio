import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.scss';
import Arrow_Image from '../../assets/Arrow_Image.png';


function ProjectNavigation() {
  return (
  
    <nav className={styles.ProjectList}>
 
 
      <Link to="sillystringfactory" alt="SillyStringFactory" title="StillyStringFactory">
        <h1><u>Silly String Factory</u></h1>
        <h4></h4>
      </Link>

      <Link to="gallerygram" alt="GalleryGram" title="GalleryGram">
        <h1><u>Gallery Gram</u></h1>
        <h4></h4>
      </Link>
      <img src={Arrow_Image} alt="Arrow pointing up" className={styles.arrowImage} /> 
    </nav>
  

  );
}

export default ProjectNavigation;
