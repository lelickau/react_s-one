import React from 'react';
import style from './navBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={style.nav}>
				<ul className={style.nav__list}>
					<li className={style.nav__item}>
						<NavLink to="/pageProfile" activeClassName='active_link'>Profile</NavLink>
					</li>
					<li className={style.nav__item}>
						<NavLink to="/pageDialogs" activeClassName='active_link'>Messages</NavLink>
					</li>
					<li className={style.nav__item}>
						<NavLink to="/pageNews" activeClassName='active_link'>News</NavLink>
					</li>
					<li className={style.nav__item}>
						<NavLink to="/pageMusic" activeClassName='active_link'>Music</NavLink>
					</li>
					<li className={style.nav__item}>
						<NavLink to="/pageSettings" activeClassName='active_link'>Settings</NavLink>
					</li>
				</ul>
			</nav>
	)
}

export default NavBar;