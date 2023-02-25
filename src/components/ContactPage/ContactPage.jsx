import styles from 'ContactPage.module.scss';
import React from 'react';
import LinkedIn_LoGo from '../../assets/linkedin.png';

function ContactPage(){
  return (
    <div>
      <dir>
      <div className={styles.ContactContainer}>
        <h1>
          <h1>
            <span className={styles.typing}>Come Say Hi,</span>
          </h1>
        </h1>
      </div>
       </dir>



      <div className={styles.Information}>
        <h2>
          {`Come Connect On LinkedIn`}
        <a href="https://www.linkedin.com/in/brandon-fenk/">
          <img src={LinkedIn_LoGo} alt="black linkedin png" />
        </a>
        </h2>
        <h2>
          {`Link To My`}
          <a href="https://drive.google.com/file/d/1XmXcK48eL-O1FvyOBEUy9r5PBIcrb1Sp/view?usp=share_link">
            <h3>Resume</h3>
          </a>
        </h2>
      </div>
    </div>
   
  
  )
}

export default ContactPage;