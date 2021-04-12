import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/valudators';
import { Input } from '../common/formsCustomize/formsCustomize';
import style from './pageLogin.module.css';
import {login} from '../../redux/authReducer';
import { Redirect } from 'react-router';

const maxLength = maxLengthCreator(20);
const LoginForm = (props) => {
    console.log(props);
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'email'} component={Input} placeholder='email' validate={[required, maxLength]} />
                </div>
                <div>
                    <Field name={'password'} component={Input} type='password' placeholder='Password' validate={[required, maxLength]} />
                </div>
                <div className={style.remember}>
                    <Field component={'input'} className={style.checkbox} name={'rememberMe'} type='checkbox' validate={[required, maxLength]} />
                <span className={style.diss}>Remember me</span>
                </div>
                {
                    props.error && <span className={style.error}>{props.error}</span>
                }
                <button className={style.btn}>LogIn</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const PageLogin = (props) => {
    console.log(props);
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to='/pageProfile'/>
    }
    return (
        <div className={style.box}>
            <h1 className={style.title}>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(PageLogin);