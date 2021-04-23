import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/valudators';
import {CreateField, Input } from '../common/formsCustomize/formsCustomize';
import style from './pageLogin.module.css';
import {login} from '../../redux/authReducer';
import { Redirect } from 'react-router';

const maxLength = maxLengthCreator(25);
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                {CreateField('Email', 'email', [required, maxLength], Input, 'text')}
                {CreateField('Password', 'password', [required, maxLength], Input, 'password')}
                <div className={style.remember}>
                {CreateField(null, 'rememberMe', [required, maxLength], 'input', 'checkbox', {className: `${style.checkbox}`})}
                <span className={style.diss}>Remember me</span>
                </div>
                {captchaUrl && <img alt='captcha' src={captchaUrl} />}
                { captchaUrl &&  CreateField("Symbols from image", "captcha", [required], Input, 'text') }
                
                { error && <span className={style.error}>{error}</span>}
                <button className={style.btn}>LogIn</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const PageLogin = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(isAuth) {
        return <Redirect to='/pageProfile'/>
    }
    console.log({login, isAuth, captchaUrl});
    return (
        <div className={style.box}>
            <h1 className={style.title}>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(PageLogin);