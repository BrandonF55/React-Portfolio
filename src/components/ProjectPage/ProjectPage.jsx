import React from "react";
import styles from './ProjectPage.module.scss';
import ProjectPageNavigation from'./ProjectPageNavigation'
import CustomParticles  from '../Particle';


function ProjectPage(){
  return(
    <div className={styles.ProjectPage}>
      <ProjectPageNavigation/>
      <CustomParticles/>
    </div>
  );
}

export default ProjectPage;