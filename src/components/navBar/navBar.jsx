import React from 'react';
import style from './navBar.module.css';

const NavBar = () => {
	return (
		<nav className={style.nav}>
				<ul className={style.nav__list}>
					<li className={style.nav__item}>Profile</li>
					<li className={style.nav__item}>Messages</li>
					<li className={style.nav__item}>News</li>
					<li className={style.nav__item}>Music</li>
					<li className={style.nav__item}>Settings</li>
				</ul>
			</nav>
	)
}

export default NavBar;