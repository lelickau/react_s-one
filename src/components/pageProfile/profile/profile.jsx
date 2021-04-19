import React from 'react';
import style from './profile.module.css';
import Preloader from '../../common/preloader/preloader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HookProfileStatus from './hookProfileStatus';

const Profile = ({profile, status, updateStatus}) => {
	if(!profile) {
		return(<Preloader/>);
	}
	let searchJob = profile.lookingForAJob;
	let aboutSearchJob = profile.lookingForAJobDescription;
	
	return (
		<div className={style.content}>

			<div className={style.avatar__box}>
				<img alt='avatar' src={profile.photos.large} className="avatar"/>
			</div>
			<div className={style.about__box}>
				<h2>{profile.fullName}</h2>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon='address-card'/></span>
					<span className={style.about}>About Me:</span>
						{profile.aboutMe || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
					<span className={style.about}></span>
						{profile.contacts.facebook || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'vk']} /></span>
					<span className={style.about}></span>
						{profile.contacts.vk || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
					<span className={style.about}></span>
						{profile.contacts.twitter || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
					<span className={style.about}></span>
						{profile.contacts.instagram || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'youtube']} /></span>
					<span className={style.about}></span>
						{profile.contacts.youtube || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon={['fab', 'github']} /></span>
					<span className={style.about}></span>
						{profile.contacts.github || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon='laptop-code'/></span>
					<span className={style.about}></span>
						{profile.contacts.website || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon='link' /></span>
					<span className={style.about}></span>
						{profile.contacts.mainLink || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.icon__box}><FontAwesomeIcon icon='briefcase' /></span>
					<span className={style.about}></span>
					{!searchJob ? <span>I'm not looking for a job</span> : <span className={style.about}>I'm looking for a job</span>}
				</div>
				<div className={style.about__itom}>
					<span className={style.about}></span>
						{aboutSearchJob}
				</div>
			</div>
			<HookProfileStatus status={status} updateStatus={updateStatus} />
					</div>
	)
}

export default Profile;