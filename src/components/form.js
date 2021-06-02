import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import styles from '../styles/componentStyles/form.module.css';
import image from '../images/form.png';
import ScrollableAnchor from 'react-scrollable-anchor';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


export default function LoginForm({light}) {
	const [state, setState] = React.useState({
		open: false,
		Transition: Fade,
	  });
	
	  const handleClick = (Transition) => () => {
		setState({
		  open: true,
		  Transition,
		});
	  };
	
	  const handleClose = () => {
		setState({
		  ...state,
		  open: false,
		});
	  };


	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [valid, setValid] = React.useState(false);
  
	const validationHandler = (event) => {
		const regExp = /^(\+7|[78])(\s?|-?)(\(\d{3}\)|\d{3})(-?|\s?)\d{3}(-?|\s?)\d{2}(-?|\s?)\d{2}$/ig;
		if(regExp.test(phone)){
			setValid(true)
		}
		else{
			setValid(false)
		};
	}

	const handleSubmit = (e) => {
	  e.preventDefault();
	};
	
	return (
		<div className={styles.wrapper}>
			<div className={light ? styles.formWrapperL : styles.formWrapper}>
				

				
				<form onSubmit={handleSubmit}>
					<ScrollableAnchor id={'form'}>
						<label>Введите свои контакты</label>
					</ScrollableAnchor>
					<div className={styles.inputWrapper}>
						<input className={styles.input} type='text' placeholder={`Имя`} id='name' value={name} onChange={(e) => setName(e.target.value)} />
					</div>
					<div className={styles.inputWrapper}>
						<input className={styles.input} type='text'  placeholder={`Телефон`} id='phone' value={phone} onBlur={validationHandler} onChange={(e) => setPhone(e.target.value)} />
					</div>
						<p className={styles.p}>Мы не храним Ваши персональные данные. Имя и телефон необходимы для обратного звонка</p>
						<Button variant="contained" onClick={handleClick(SlideTransition)}>Отправить</Button>
						<Snackbar
							open={state.open}
							onClose={handleClose}
							TransitionComponent={state.Transition}
							message={valid ? 'Заявка успешно отправлена!' : 'Введите, пожалуйста, телефон.'}
							key={state.Transition.name}
						/>
				</form>
			</div>
			
			<img className={styles.image} alt='alt' src={image}/>
		</div>
		
	  
	);
  }
