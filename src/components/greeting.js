import React from 'react'
import styles from '../styles/componentStyles/greeting.module.css';

export default function Greeting() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                POWER CLUB<br/>
                <span>Сеть тренажёрных залов</span>
            </div>
            <div className={styles.tagline}>
                Ты знаешь, что ты можешь.
            </div>
        </div>
    )
}
