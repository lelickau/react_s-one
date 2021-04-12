import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../header/logologo.png';
import style from './header.module.css';

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
					? <div>{props.login} <button onClick={props.logout}>LogOut</button></div>
					: <NavLink to={'/login'}>LogIn</NavLink>}
			</div>
		</header>
	)
}

export default Header;