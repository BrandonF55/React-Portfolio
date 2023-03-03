import styles from './ProjectPage.module.scss';
import React from "react";

function SillyStringFactory() {
    return (
        <div className={styles.ProjectsContainer}>
            <h1><u>Welcome To The Silly String Factory</u></h1>

            <div>


                <div className={styles.ProjectLinks}>
                    <a href="https://github.com/BrandonF55/Sillystringz.solutions.git" title="View Code" alt="View Code">
                        <h2>View Code Here</h2>
                    </a>
                </div>


                <h3>Technologies Used</h3>
                <div className={styles.IconContainer}>
                    <p className={styles.Icons}>C#</p>
                    <p className={styles.Icons}>ASP.NET6</p>
                    <p className={styles.Icons}>MySQL</p>
                    <p className={styles.Icons}>MVC</p>
                    <p className={styles.Icons}>CSS</p>
                    <p className={styles.Icons}>HTML</p>
                    <p className={styles.Icons}>Entity Framework Core</p>
                </div>

                <h3>Description</h3>
                <em>
                    This project is a simple web application for a business to keep track of Engineers and their Machines. Engineers and Machines have a many to many relationship meaning each engineer can belongs to many machines. A Engineer can have many machines. The application allows the user to create, update, delete, and view lists of the Engineers they're assigned corresponding machines.
                </em>

                <h3>Getting started</h3>
                <li>
                    Engineers and Machines have a many to many relationship meaning each engineer can belongs to many machines. A Engineer can have many machines.

                </li>
                <h3>Application</h3>
                <li>
                    The application allows the user to create, update, delete, and view lists of the Engineers they're assigned and their corresponding machines.
                </li>

                <div>
                    <img src="" alt="" />
                </div>




            </div>


        </div>
    )
}


export default SillyStringFactory;