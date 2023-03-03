import React from "react";
import { Outlet } from "react-router-dom";
import ProjectList from "./ProjectList";
import styles from './ProjectPage.module.scss';
import ProjectPageNavigation from'./ProjectPageNavigation'

function ProjectPage(){
  return(
    <div className={styles.ProjectPage}>
      {/* <Outlet/> */}
      <ProjectPageNavigation/>
      {/* <ProjectList/> */}
    </div>
  );
}

export default ProjectPage;