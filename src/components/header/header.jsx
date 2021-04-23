import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../header/logologo.png';
import style from './header.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = (props) => {
	//console.log(props);
	return (
		<header className={`${style.header} container`}>
			<div className={style.logo__box}>
				<img className={style.logo} alt='logo' src={logo}/>
				<span>ReactApp</span>
			</div>
			<div className={style.login__link}>
				{props.isAuth 
					? <div>{props.login} <button className={style.btn_edit} onClick={props.logout}><FontAwesomeIcon icon='sign-out-alt'/></button></div>
					: <button className={style.btn_edit} ><NavLink to={'/login'}><FontAwesomeIcon icon='user'/></NavLink></button>}
			</div>
		</header>
	)
}

export default Header;