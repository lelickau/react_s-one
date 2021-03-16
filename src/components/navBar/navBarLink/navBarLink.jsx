import React from 'react';
import style from './navBarLink.module.css';
import {NavLink} from 'react-router-dom';

const NavBarLink = (props) => {
	console.log(props);
	return (
		<li className={style.nav__item}>
			<NavLink to={props.href} activeClassName='active_link'>{props.link}</NavLink>
		</li>
	)
}

export default NavBarLink;