import React from 'react';
import logo from '../header/logologo.png';
import style from './header.module.css';

const Header = () => {
	return (
		<header className={`${style.header} container`}>
				<img className={style.logo} alt='logo' src={logo}/>
				<span>ReactApp</span>
		</header>
	)
}

export default Header;