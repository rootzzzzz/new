import React from 'react'
import {useState} from 'react';

import styles from '../styles/componentStyles/header.module.css';
import logo from '../images/logo.svg';
import logoBlack from '../images/logoBlack.svg';
import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';


export default function Header({global}) {
const [hide, setHide] = useState(false)

    return (
        <div className={`${styles.wrapper} ${global.light ? styles.wrapperLight : ''}`}>
            <div className={`${global.light ? styles.logoLight : styles.logo}`}>
                POWER<br></br><span>CLUB</span>
            </div>
            <div className={global.light ? styles.rectangleLight : styles.rectangle}/>
            <div>
                <img src={global.light ? logoBlack : logo} alt='logo'/>
            </div>
            <div className={`${styles.nav}  ${global.light ? styles.navLight : ''}`}>
                <div>
                    <a href='#treners'>Тренера</a>
                </div>
                <div>
                    <a href='#schedule'>Занятия</a>
                </div>
                <div onClick={() => {global.setLight(!global.light)}}>
                    <a href='#1'>
                     {global.light ? 'Светлая тема' : 'Тёмная тема'}
                    </a>
                </div>
                <div>
                    <a href='#calculator'>Рассчитать стоимость</a>
                </div>
                <div>
                    <a href='#form'>Свяжитесь с нами</a>
                </div>
                <div>
                    <a href='tel:+78008008080'>+7-900-800-70-60</a>
                </div>
            </div>
           
            <div className={styles.burger}>
                <IconButton onClick={() => {setHide(!hide)}} color="primary" aria-label="upload picture" component="span">
                    <DehazeIcon />
                </IconButton>
            </div>
            <div style={hide ? {top:'104px'} : {}} className={`${styles.mobileNav}  ${global.light ? styles.mobileNavLight : ''}`}>
                <div>
                    <a href='#treners'>Тренера</a>
                </div>
                <div>
                    <a href='#schedule'>Занятия</a>
                </div>
                <div onClick={() => {global.setLight(!global.light)}}>
                    <a href='#3'>{global.light ? 'Светлая тема' : 'Тёмная тема'}</a>
                </div>
                <div>
                    <a href='#calculator'>Рассчитать стоимость</a>
                </div>
                <div>
                    <a href='#5'>Свяжитесь с нами</a>
                </div>
                <div>
                    <a href='tel:+78008008080'>+7-900-800-70-60</a>
                </div>
            </div>
        </div>
    )
}
