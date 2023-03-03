import React from "react";
import { FaArrowDown } from 'react-icons/fa'
import styles from './Arrow.module.scss';



function Arrow (){
    return (
        <div className={styles.Arrow}>
            <FaArrowDown/>
        </div>
    );
}

export default Arrow;