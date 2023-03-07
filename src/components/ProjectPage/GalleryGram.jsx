import React from "react";
import styles from './ProjectPage.module.scss';
import ASP_Net from '../../assets/ASP_NET.png'
import C from '../../assets/C#.png'
import HTML from '../../assets/HTML.png'
import MySQL from '../../assets/MySQL.png'
import CSS from '../../assets/CSS.png'
import Net from '../../assets/Net.png'
import Postman from '../../assets/Postman.png'
import Typewriter from 'react-typewriter-effect';



function GalleryGram() {
    return (
        <div className={styles.ProjectsContainer}>
     <hr />
            <h1><u>Welcome To The Gallery Gram</u></h1>

            <div className={styles.ProjectLinks}>
                <a href="https://github.com/BrandonF55/GalleryGram.git" title="View Code" alt="View Code">
                    <h2>View Code Here</h2>
                </a>
            </div>

            <h3><u>Technologies Used</u></h3>

            <div className={styles.IconContainer}>
                <img src={C} alt="C#" />
                <img src={ASP_Net} alt="ASP.Net" />
                <img src={MySQL} alt="MySQL" />
                <img src={Net} alt=".Net" />
                <img src={CSS} alt="CSS" />
                <img src={Postman} alt="Postman" />
                <img src={HTML} alt="HTML" />
            </div>

                <div className={styles.TextContainer}> 
            <h3><u>Description</u></h3>
            <em>
                This is a Gallery application that utilizes uploading of pictures, liking pictures, and purchasing prints of the pictures that you enjoy. Utilizing a shopping cart API, authentication and authorization, and databases.Each user will create their own profile and gain access to their own profile showing photos that they have uploaded as well as the images that they have 'liked'.
            </em>

            <h3><u>Team Week Project</u></h3>
            <li>
            Our Gallery Gram team consisted of four members who worked collaboratively to develop an application over the course of a week. In order to streamline the development process, your team decided to divide into two groups: a back-end team and a front-end team. The back-end team focused on setting up the necessary API and database, as well as carefully refining the overall functionality of the application. The front-end team was responsible for designing an aesthetically pleasing and user-friendly interface that would enhance the user experience. By leveraging the strengths and expertise of each team, your group was able to effectively develop a fully-functional application that satisfied both technical and design requirements.
            </li>

            <h3><u>My Part In The Application</u></h3>
            <li>
             
            </li>
            As a member of the front-end team, focus was on creating a visually appealing and intuitive user interface for the Gallery Gram application. I played an integral role in designing and implementing a sleek and modern layout that not only met the functional requirements of the application but also provided an enjoyable user experience. My attention to detail and keen eye for design helped to elevate the overall aesthetic of the application, making it more engaging and attractive to users. My contribution to the front-end team demonstrates my proficiency in user interface design and my ability to collaborate effectively with my colleagues to deliver a high-quality product.


            </div>

        </div>
    )
}

export default GalleryGram;