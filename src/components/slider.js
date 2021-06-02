import {useEffect, useState} from 'react';
import styles from '../styles/componentStyles/slider.module.css';
import '../styles/animate.css'

import trener1 from '../images/trener1.png';
import trener2 from '../images/trener2.png';
import trener3 from '../images/trener3.png';
import trener4 from '../images/trener4.png';
import trener5 from '../images/trener5.png';
import arrow from '../images/arrow.png';


export default function SliderContainer({light, id}){

    const [coord, setCoord] = useState(false);
    const [iniTcoord, setInitCoord] = useState(false);
    const [int, setInt] = useState(false);

    useEffect(() => {
        setCoord(parseInt(getComputedStyle(document.querySelector(`.${styles.card}`)).left));
        setInitCoord(parseInt(getComputedStyle(document.querySelector(`.${styles.card}`)).left)); 
    } ,[])
   
    useEffect(() => {        
        let interval = setInterval(() => {
            if(document.documentElement.clientWidth <= 480){
                if(coord < -710){
                    setCoord(iniTcoord)
                }
                else setCoord(coord - 260)
            }
            else if(document.documentElement.clientWidth <= 720){
                if(coord < -400){
                    setCoord(iniTcoord)
                }
                else setCoord(coord - 260)
            }
            else if(document.documentElement.clientWidth <= 1100){
                if(coord < -200){
                    setCoord(iniTcoord)
                }
                else setCoord(coord - 260)
            }  
            else{
                if(coord < -310){
                    setCoord(iniTcoord)
                }
                else setCoord(coord - 260)
            }
        },10000)
        return () => {
            clearInterval(interval)
        }
    }, [coord])

    useEffect(() => {        
        let interval = setInterval(() => {
            setInt(!int)
        },4000)
        return () => {
            clearInterval(interval)
        }
    }, [int])

    const handleClick = (event) => {
        if(document.documentElement.clientWidth <= 480){
            if(coord < -710){
                setCoord(iniTcoord)
            }
            else setCoord(coord - 260)
        }
        else if(document.documentElement.clientWidth <= 720){
            if(coord < -400){
                setCoord(iniTcoord)
            }
            else setCoord(coord - 260)
        }
        else if(document.documentElement.clientWidth <= 1100){
            if(coord < -200){
                setCoord(iniTcoord)
            }
            else setCoord(coord - 260)
        }  
        else{
            if(coord < -310){
                setCoord(iniTcoord)
            }
            else setCoord(coord - 260)
        }
        
    }
    return (
            <div 
                onClick={handleClick}
                className={`${styles.currentSlide} ${id}`}
            >
                
                <div className={styles.arrow}>
                    <img  alt='' className={int ? '' : 'animate__animated animate__pulse animate__slower'} src={arrow}/>
                </div>

                <div style={{left:coord}} className={light ? styles.cardL : styles.card}>
                    <h1 className={light ? styles.trenerNameL : styles.trenerName}>ANNA</h1>
                    <img src={trener1} alt=''/>
                </div>
                <div style={{left:coord}} className={light ? styles.cardL : styles.card}>
                    <h1 className={light ? styles.trenerNameL : styles.trenerName}>ALENA</h1>
                    <img src={trener2} alt=''/>
                </div>
                <div style={{left:coord}} className={light ? styles.cardL : styles.card}>
                    <h1 className={light ? styles.trenerNameL : styles.trenerName}>VICTOR</h1>
                    <img src={trener3} alt=''/>
                </div>
                <div style={{left:coord}} className={light ? styles.cardL : styles.card}>
                    <h1 className={light ? styles.trenerNameL : styles.trenerName}>ANDREY</h1>
                    <img src={trener4} alt=''/>
                </div>
                <div style={{left:coord}} className={light ? styles.cardL : styles.card}>
                    <h1 className={light ? styles.trenerNameL : styles.trenerName}>DARIA</h1>
                    <img src={trener5} alt=''/>
                </div>
            </div>
    )
}
