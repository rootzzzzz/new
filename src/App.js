
import styles from './styles/home.module.css';
import Header from './components/Header';
import Greeting from './components/greeting';
import OurTeam from './components/ourTeam';
import PhotoSlider from './components/photoSlider';
import Calculator from './components/calculator';
import Schedule from './components/schedule';
import Form from './components/form';
import React, {useState,useEffect} from 'react';

function App() {
    const [light, setLight] = useState(false);

    const global = {light, setLight};

  return (
    <div className={styles.body} style={light ? {backgroundColor:'#fff'} : {}}>
        <div  className={styles.root}>

            <Header global={global}/>
            <div className={styles.main}>
                <Greeting/>
                <OurTeam light={light}/>
                <PhotoSlider/>
                <Calculator light={light}/> 
                <div className={light ? styles.scheduleL : styles.schedule}>
                    <p className={light ? styles.scheduleTitleL : styles.scheduleTitle}>Узнайте расписание занятий!</p>
                    <Schedule light={light}/>
                </div>
                <div className={light ? styles.formL : styles.form}>
                    <p className={light ? styles.scheduleTitleL : styles.scheduleTitle}>Есть вопросы? Заполните форму, а потом мы вам перезвоним и всё расскажем!</p>
                    <Form light={light}/>
                </div>
                
            </div>
        
        </div>
    </div>
    
  );
}

export default App;
