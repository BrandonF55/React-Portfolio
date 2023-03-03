import React from "react";
import styles from './ProjectPage.module.scss';
import ProjectPageNavigation from'./ProjectPageNavigation'


function ProjectPage(){
  return(
    <div className={styles.ProjectPage}>
      <ProjectPageNavigation/>
    </div>
  );
}

export default ProjectPage;