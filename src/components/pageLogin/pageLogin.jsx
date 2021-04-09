import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/valudators';
import { Input } from '../common/formsCustomize/formsCustomize';
import style from './pageLogin.module.css';
import {login} from '../../redux/authReducer';

const maxLength = maxLengthCreator(20);
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'login'} component={Input} placeholder='email' validate={[required, maxLength]} />
                </div>
                <div>
                    <Field name={'password'} component={Input} placeholder='Password' validate={[required, maxLength]} />
                </div>
                <div className={style.remember}>
                    <Field component={Input} name={'rememberMe'} type='checkbox' validate={[required, maxLength]} />
                <span className={style.diss}>Remember me</span>
                </div>
                
                <button className={style.btn}>LogIn</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const PageLogin = (props) => {
    const onSubmit = (formData) => {
        
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div className={style.box}>
            <h1 className={style.title}>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}




export default connect(null, {login})(PageLogin);