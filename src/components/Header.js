// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import styles from './Headers.module.css'

const Header = () => {
    return (
        <header className={styles.Headers}>
            <h1 className={styles.Headers__title}>Call a Friend</h1>
            <p className={styles.Headers__subtitle}>your friendly contact app</p>
        </header>
    )
}

export default Header;