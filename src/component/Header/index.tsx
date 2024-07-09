import React from 'react';
import styles from './header.module.scss'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                Рика и Морти
            </Link>
            <nav className={styles.nav}>
                <li className={styles.link}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/hero'}>Hero</NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/location'}>Location</NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/episode'}>Episode</NavLink>
                </li>
                <li className={styles.link}>
                    <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                             to={'/register'}>Register</NavLink>
                </li>
            </nav>
        </div>
    );
};

export default Header;