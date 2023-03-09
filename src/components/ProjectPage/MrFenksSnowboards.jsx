import styles from './ProjectPage.module.scss';
import React from "react";
import CSS from '../../assets/CSS.png'
import HTML from '../../assets/HTML.png'
import JS from '../../assets/JS.png'
import React1 from '../../assets/React1.png'
import 'animate.css';

function MrFenksSnowboards() {
    return (
        <div className={styles.ProjectsContainer}>
            <hr />
            <h1 className="animate__animated animate__fadeInDown" ><u>Welcome To Mr. Fenk's Snowboards</u></h1>

            <div>


                <div className={styles.ProjectLinks}>
                    <a href="https://github.com/BrandonF55/MrFenks-Snowboards.git" title="View Code" alt="View Code">
                        <h2>View Code</h2>
                    </a>

                    <a href='https://storied-biscochitos-eeaa9f.netlify.app' title="View live Site" alt="View live Site">
                        <h2> View Live Site</h2>
                    </a>
                </div>


                <h3><u>Technologies Used</u></h3>
                <div className={styles.IconContainer}>
                    <img src={CSS} alt="CSS" />
                    <img src={HTML} alt="HTML" />
                    <img src={JS} alt="JS" />
                    <img src={React1} alt="REACT" className={`${styles.React1} ${styles.spin}`} />

                </div>
                <div className={`${styles.TextContainer} ${styles.FadeIn}`}>
                    <h3><u>Description</u></h3>
                    <em >
                        This is a Small React Application For Mr Fenk's Snowboards. You can add a new snowboard, with terrain, price. You can Delete, Add, Edit, and sell a snowboard from the inventory
                    </em>


                    <h3><u>Creating This Application</u></h3>
                    <li >
                        With this architecture, the application is divided into three main components: the Model, which represents the data and logic of the application; the View, which represents the user interface; and the Controller, which acts as the intermediary between the Model and View. By leveraging React, I was able to create a powerful and dynamic user interface that was both easy to update and highly customizable. Throughout the project, I focused on planning and designing a clear and organized structure for the application, carefully breaking down the requirements and ensuring the components interacted seamlessly with each other. My attention to detail and persistence allowed me to build a successful MVC React application that met my goals and surpassed my expectations. I am proud of the skills I developed during this project and look forward to applying them to future endeavors.
                    </li>
                </div>
            </div>
        </div>

    )
}


export default MrFenksSnowboards;