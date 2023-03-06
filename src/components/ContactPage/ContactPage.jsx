import styles from './ContactPage.module.scss';
import React from 'react';
import LinkedIn_LoGo from '../../assets/LinkedIn_LoGo.png';
import Selfie from './Selfie';
import CustomParticles  from '../Particle';


function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <hr />

      <div className={styles.ContactContainer}>
        <div>
          <h1>
            <span className={styles.typing}>Come Say Hi,</span>
          </h1>
        </div>
        
      </div>



      <Selfie />
      <div className={styles.Information}>
        
        <h2>
          {`Come Connect With Me On LinkedIn:`}
          <a href='https://www.linkedin.com/in/brandon-fenk/' className={styles.LinkedIn}>
            <img src={LinkedIn_LoGo} alt='black linkedin png' />
          </a>
        </h2>
        

        <h2>
          {`Here You Can Find My:`}
          <a href='https://drive.google.com/file/d/1XmXcK48eL-O1FvyOBEUy9r5PBIcrb1Sp/view?usp=share_link'>
            <h3>Resume</h3>
          </a>
        </h2>
      </div>
    <CustomParticles/>
    </div>
  );
}

export default ContactPage;
