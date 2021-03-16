import React from 'react';
import style from './navBar.module.css';
import NavBarLink from './navBarLink/navBarLink';



const NavBar = (props) => {
	console.log(props);

	let navBarElement = props.link
        .map( link => <NavBarLink link={link.link} href={link.href}/> );
	return (
		<div className={style.nav}>
				<ul className={style.nav__list}>
					{navBarElement}
				</ul>
			</div>
	)
}

export default NavBar;