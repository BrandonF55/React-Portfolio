import React from "react";
import styles from './ProjectPage.module.scss';
import ASP_Net from '../../assets/ASP_NET.png'
import C from '../../assets/C#.png'
import CSS1 from '../../assets/CSS1.png'
import HTML from '../../assets/HTML.png'
import MySQL from '../../assets/MySQL.png'



function GalleryGram() {
    return (
        <div className={styles.ProjectsContainer}>
            <h1><u>Welcome To The Gallery Gram</u></h1>

            <div className={styles.ProjectLinks}>
                <a href="https://github.com/BrandonF55/GalleryGram.git" title="View Code" alt="View Code">
                    <h2>View Code Here</h2>
                </a>
            </div> 

            <h3>Technologies Used</h3>
            <div className={styles.IconContainer}>

                {/* <p className={styles.Icons}>{C}</p> */}
                <img src={C} alt="" />
                <p className={styles.Icons}>ASP.NET</p>
                <p className={styles.Icons}>MySQL</p>
                <p className={styles.Icons}>Entity Framework Core 6.0.0</p>
                <p className={styles.Icons}>Postman</p>
                <img src={CSS1} alt="" />
                {/* <p className={styles.Icons}>{CSS1}</p> */}
                <p className={styles.Icons}>HTML</p>
            
            </div>


                <h3>Description</h3>
            <em>
                This is a Gallery application that utilizes uploading of pictures, liking pictures, and purchasing prints of the pictures that you enjoy. Utilizing a shopping cart API, authentication and authorization, and databases.Each user will create their own profile and gain access to their own profile showing photos that they have uploaded as well as the images that they have 'liked'.
            </em>

            <h3>Getting started with the GalleryGram</h3>
            <li>
                Users can create a account on the main page where it will create you a profile where you can upload, like, and print pictures you like on the application.
            </li>
            <h3>Interactive Application</h3>
            <li>
                On the Main Page of the application you'll see all of the pictures you liked awhile scrolling through and liking pictures. You can Fully order the picture of your choosing through a sand-box Api. It doesn't actually place the order but you get a order number once you hit the check out button.
            </li>

            <div>
                <img src="" alt="" />
            </div>




        </div>
    )
}

export default GalleryGram;