import React from "react";
import Selfie1 from '../../assets/Selfie1.png'
import Styles from './Selfie.module.scss'

function Selfie() {
    return(
        <div className={Styles.Selfie}> 
        <img src={Selfie1} alt="selfie" className={Styles.Selfie} />
        </div>
    );
}

export default Selfie;