import React from 'react';
import style from './navBarLink.module.css';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const NavBarLink = (props) => {
	//console.log(props);
	return (
		<li className={style.nav__item}>
			<div className={style.icon__box}><FontAwesomeIcon icon={props.icon}/></div>
			<NavLink to={props.href} className='nav__item' activeClassName='active_link'>{props.link}</NavLink>
		</li>
	)
}

export default NavBarLink;