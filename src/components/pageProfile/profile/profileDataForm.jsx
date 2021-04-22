import style from './profile.module.css';
import React from 'react';
import Contacts from './profile';
import { CreateField, Input, Textarea } from '../../common/formsCustomize/formsCustomize';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {
	//console.log({profile});
	let searchJob = profile.lookingForAJob;
	let aboutSearchJob = profile.lookingForAJobDescription;
	return (
		<form onSubmit={handleSubmit} className={style.about__box}>
                {isOwner && <button>Save</button>}{ error && <span className={style.error}>{error}</span>}
				<h2>{CreateField('Full name', 'fullName', [], Input, 'text')}</h2>
				<div className={style.about__itom}>
					
					<span className={style.about}>{CreateField('About me..', 'aboutMe', [], Textarea, 'textarea')}</span>
				</div>
				<div>
					<b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
						return (<div key={key}>
							<b>{key}:{CreateField(key, 'contacts.'+key, [], Input, 'text')}</b>
							</div>)
					})}
				</div>
				<div className={style.about__itom}>
					{CreateField(null, 'lookingForAJob', [], 'input', 'checkbox')}
					<span className={style.about__edit}>I'm looking for a job</span>
				</div>
                <div className={style.about}>{CreateField('About job..', 'lookingForAJobDescription', [], Textarea, 'textarea')}</div>
			</form> 
	)
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;