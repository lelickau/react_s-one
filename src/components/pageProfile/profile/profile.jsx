import React, { useState } from 'react';
import style from './profile.module.css';
import Preloader from '../../common/preloader/preloader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HookProfileStatus from './hookProfileStatus';
import avatar from './avatar.jpg';
import ProfileDataForm from './profileDataForm';

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
	let [editMode, setEditMode] = useState(false);
	if(!profile) {
		return(<Preloader/>);
	}
	
	const onMainPhotoSelected = (e) => {
		if( e.target.files.length) {
			//console.log(e.target.files[0].name);
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
			setEditMode(false);
		})
		//
    }

	return (
		<div className={style.content}>

			<div className={style.avatar__box}>
				<img alt='avatar' src={profile.photos.large || avatar} className="avatar"/>
				
				{isOwner && <div className={style.input__wrapper}>
								<label className={style.input__file_button}>
									<input name='file' className={style.input__file} type='file' onChange={onMainPhotoSelected} multiple/>
									<span className={style.input__file_icon_wrapper}><FontAwesomeIcon icon='download'/></span>
      								<span className={style.input__file_button_text}>Add photo</span>
								</label>
							</div>
				}
			</div>
			{editMode 
				? <ProfileDataForm initialValues={profile} profile={profile} isOwner={isOwner} onSubmit={onSubmit}/> 
				: <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {setEditMode(true)}} />}
			
			<HookProfileStatus status={status} updateStatus={updateStatus} />
					</div>
	)
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
	let searchJob = profile.lookingForAJob;
	let aboutSearchJob = profile.lookingForAJobDescription;
	return (
		<div className={style.about__box}>
		
				<h2>{profile.fullName}</h2>
				<div className={style.about__itom}>
					<span className={style.about}>About me:</span>{profile.aboutMe || "-"}
				</div>
				<div className={style.about__itom}>
					<span className={style.about}>Job:</span>
					{searchJob ? <span>I'm looking for a job</span> : <span className={style.about}>I'm not looking for a job</span>}
					
				</div>
				<div className={style.about__itom}><span className={style.about}>About job:</span>{aboutSearchJob}</div>
				<div>
					{Object.keys(profile.contacts).map(key => {
						return (<div key={key}>
							<Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
							</div>)
					})}
				</div>
				{isOwner && <button className={style.btn_edit} onClick={toEditMode}><FontAwesomeIcon icon='edit'/></button>}
			</div> 
	)
}


export const Contacts = ({contactTitle, contactValue}) => {
	return (
		<div className={style.about__itom}>
			<span className={style.about}>{contactTitle}:</span>
			{contactValue}
		</div>
		
	)
}

export default Profile;