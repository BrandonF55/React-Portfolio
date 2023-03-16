import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.scss';
import Arrow_Image from '../../assets/Arrow_Image.png';
import 'animate.css';


function ProjectNavigation() {
  return (
  
    <nav className={styles.ProjectList}>
 <hr />
 
      <Link to="mrfenks-snowboards" alt="MrFenks-Snowboards" title="MrFenks-Snowboards">
        <h1 className="animate__animated animate__backInLeft" ><u>MrFenks-Snowboards</u></h1>
      </Link>

      <Link to="gallerygram" alt="GalleryGram" title="GalleryGram">
        <h1 className="animate__animated animate__backInRight"><u>Gallery Gram</u></h1>
      </Link>
      <img src={Arrow_Image} alt="Arrow pointing up" className={styles.arrowImage} /> 
    </nav>
  

  );
}

export default ProjectNavigation;
