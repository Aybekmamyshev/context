import React from 'react';
import styles from './notfound.module.scss'
const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>404</h2>
            <p className={styles.text}>Page not found</p>
        </div>
    );
};

export default NotFound;