import React from 'react';
import logo from '../header/logologo.png';
import style from './header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
				<img className={style.logo} alt='logo' src={logo}/>
		</header>
	)
}

export default Header;