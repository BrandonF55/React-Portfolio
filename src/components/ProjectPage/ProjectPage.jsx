import React from "react";
import { Outlet } from "react-router-dom";
import styles from './ProjectPage.module.scss';

function ProjectPage(){
  return(
    <div className={styles.ProjectPage}>
      <Outlet/>
    </div>
  );
}

export default ProjectPage;