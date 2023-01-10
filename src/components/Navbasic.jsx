import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.scss"

const Navbasic = () => {
    return (
        <article className={styles.navbar}>
            <ul>
                <li><Link to="/twoplayer">Two player</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/oneplayer">One player</Link></li>
            </ul>
        </article>
    );
};

export default Navbasic;