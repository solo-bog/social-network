import React from 'react'
import styles from './Preloader.module.css'

const Preloader = (props) =>{
    return <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader;