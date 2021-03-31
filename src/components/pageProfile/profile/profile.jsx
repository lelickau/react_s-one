import React from 'react';
import style from './profile.module.css';
import avatar from './avatar.jpg';
import Preloader from '../../common/preloader/preloader';

const Profile = (props) => {
	if(!props.profile) {
		return(<Preloader/>)
	}
	return (
		<div className={style.content}>
						<div className={style.avatar__box}>
							<img alt='avatar' src={avatar} className="avatar"/>
						</div>
						<div className={style.avatar__box}>
							<img alt='avatar' src={props.profile.photos.large} className="avatar"/>
						</div>
						<div className={style.about__box}>
							<h2>Elena Kau</h2>
							<p>Birth: Nov 20 1992</p>
							<p>City: Los-Angeles</p>
							<p>Education: BA</p>
							<p>Web-site: lelickau.com</p>
						</div>
					</div>
	)
}

export default Profile;