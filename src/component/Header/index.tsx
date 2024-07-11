import React, {useContext} from 'react';
import styles from './header.module.scss'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {CustomContext} from "../../hook/Context";

const Header = () => {
    const navigate = useNavigate()
    const user = useContext(CustomContext)
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
                    {
                        user?.user ? <button onClick={() => user?.logOut(() => navigate('/register'))}>Logout</button> :
                            <NavLink className={({isActive}) => isActive ? styles.linkInner : styles.linkActive}
                                     to={'/register'}>Register</NavLink>
                    }

                </li>
            </nav>
        </div>
    );
};

export default Header;