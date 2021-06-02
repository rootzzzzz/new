import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from '../styles/componentStyles/schedule.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
function CardRender({title,name, time, light}) {
    return <div className={light ? styles.cardWrapperL : styles.cardWrapper}>
                <p>{title}</p>
                <p>{name}</p>
                <p>{time}</p>         
           </div>
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs({light}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={light ? styles.rootL :styles.root}>
      <ScrollableAnchor id={'schedule'}>
        <div></div>
      </ScrollableAnchor>
      <AppBar position="static">
        <Tabs classes={{
            root: light ? styles.rootL :styles.root,
            flexContainer:styles.flexContainer,
            indicator: styles.indicator,
        }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab classes={{root:light ? styles.tabsL : styles.tabs}} label="Понедельник" {...a11yProps(0)} />
          <Tab classes={{root:light ? styles.tabsL : styles.tabs}} label="Вторник" {...a11yProps(1)} />
          <Tab classes={{root:light ? styles.tabsL : styles.tabs}} label="Среда" {...a11yProps(2)} />
          <Tab classes={{root:light ? styles.tabsL : styles.tabs}} label="Четверг" {...a11yProps(3)} />
          <Tab classes={{root:light ? styles.tabsL : styles.tabs}} label="Пятница" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          <div className={styles.tabPanelroot}>
            <CardRender light={light} title='Кроссфит' name='Анна' time='12:00-14:00'/>
            <CardRender light={light} title='Пилатес' name='Виктор' time='14:00-16:00'/>
            <CardRender light={light} title='Йога' name='Алёна' time='16:00-18:00'/>
            <CardRender light={light} title='Растяжка' name='Дарья' time='18:00-20:00'/>
            <CardRender light={light} title='Бокс' name='Андрей' time='20:00-22:00'/>
          </div>
      </TabPanel> 
      <TabPanel value={value} index={1}>
        <div className={styles.tabPanelroot}>
            <CardRender light={light} title='Йога' name='Алёна' time='12:00-14:00'/>
            <CardRender light={light} title='Растяжка' name='Дарья' time='14:00-16:00'/>
            <CardRender light={light} title='Кроссфит' name='Анна' time='16:00-18:00'/>
            <CardRender light={light} title='Пилатес' name='Виктор' time='18:00-20:00'/>
            <CardRender light={light} title='Бокс' name='Андрей' time='20:00-22:00'/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.tabPanelroot}>
            <CardRender light={light} title='Кроссфит' name='Анна' time='12:00-14:00'/>
            <CardRender light={light} title='Пилатес' name='Виктор' time='14:00-16:00'/>
            <CardRender light={light} title='Йога' name='Алёна' time='16:00-18:00'/>
            <CardRender light={light}/>
            <CardRender light={light} title='Бокс' name='Андрей' time='20:00-22:00'/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={styles.tabPanelroot}>
            <CardRender light={light} title='Кроссфит' name='Анна' time='12:00-14:00'/>
            <CardRender light={light}/>
            <CardRender light={light} title='Йога' name='Алёна' time='16:00-18:00'/>
            <CardRender light={light} title='Растяжка' name='Дарья' time='18:00-20:00'/>
            <CardRender light={light} title='Бокс' name='Андрей' time='20:00-22:00'/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={styles.tabPanelroot}>
            <CardRender light={light} title='Кроссфит' name='Анна' time='12:00-14:00'/>
            <CardRender light={light} title='Пилатес' name='Виктор' time='14:00-16:00'/>
            <CardRender light={light} title='Йога' name='Алёна' time='16:00-18:00'/>
            <CardRender light={light} title='Растяжка' name='Дарья' time='18:00-20:00'/>
            <CardRender light={light} title='Бокс' name='Андрей' time='20:00-22:00'/>
        </div>
      </TabPanel>
    </div>
  );
}