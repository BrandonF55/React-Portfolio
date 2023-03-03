import React from "react";
import styles from './ProjectPage.module.scss';

function GalleryGram(){
    return(
        <div>
            <h1><u>Welcome To The Gallery Gram</u></h1>

            <div className={styles.ProjectLinks}>
                <a href="https://github.com/BrandonF55/GalleryGram.git" title="View Code" alt="View Code">
                <h2>View Code Here</h2>
                </a>
            </div> //end of block of code

            <div className={styles.IconContainer}>
                <p className={styles.Icons}>C#</p>
                <p className={styles.Icons}>ASP.NET</p>
                <p className={styles.Icons}>MySQL</p>
                <p className={styles.Icons}>Entity Framework Core 6.0.0</p>
                <p className={styles.Icons}>Postman</p>
                <p className={styles.Icons}>CSS</p>
                <p className={styles.Icons}>HTML</p>
            </div>
            <em>
            This is a Gallery application that utilizes uploading of pictures, liking pictures, and purchasing prints of the pictures that you enjoy. Utilizing a shopping cart API, authentication and authorization, and databases.Each user will create their own profile and gain access to their own profile showing photos that they have uploaded as well as the images that they have 'liked'.
            </em>



        </div>
    )
}

export default GalleryGram;