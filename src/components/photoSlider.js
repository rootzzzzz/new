import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/componentStyles/photoSlider.module.css';
import photo1 from '../images/1.jpg';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';
import photo5 from '../images/5.jpg';

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


export default function PhotoSlider( {children} ) {
    const [shift, setShift] = useState(0);
    const [endPoint, setEndPoint] = useState(null);
    const [width, setWidth] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const sliderWripper = document.querySelector(`.${styles.sliderWripper}`);
        const container     = document.querySelector(`.${styles.container}`);
        const sliderWidth   = parseInt(getComputedStyle(sliderWripper).width);
        const containerWidth   = parseInt(getComputedStyle(container).width);
        setWidth(sliderWidth);
        setEndPoint(containerWidth - sliderWidth);
    })

    useInterval(() => {
        if(shift <= -endPoint){
            setShift(0)
            setCount(1);
        }
        else {
            setCount(count + 1);
            setShift(shift + -width)
        }
    }, 6000)

    const handleClick = () => {
        if(shift <= -endPoint){
            setShift(0)
            setCount(1);
        }
        else {
            setCount(count + 1);
            setShift(shift + -width)
        }
    }

    return (
        <div 
            onClick={handleClick}
            className={styles.sliderWripper}
        >
            <div className={styles.arrow}>
                &gt;
            </div>
            <div className={styles.counter}>
                {count} / 5
            </div>
            <div className={styles.container} style={{transform:`translateX(${shift}px)`,}}>
                <img style={{width:width}} alt='img' src={photo1}></img>
                <img style={{width:width}} alt='img' src={photo2}></img>
                <img style={{width:width}} alt='img' src={photo3}></img>
                <img style={{width:width}} alt='img' src={photo4}></img>
                <img style={{width:width}} alt='img' src={photo5}></img>
            </div>
        </div>
    )

}
