import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './pageLogin.module.css';


const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field className={style.input} name={'login'} component={'input'} placeholder='Login' />
                </div>
                <div>
                    <Field className={style.input} name={'password'} component={'input'} placeholder='Password' />
                </div>
                <div className={style.remember}>
                    <Field component={'input'} name={'rememberMe'} className={style.checkbox} type='checkbox' />
                <span className={style.diss}>Remember me</span>
                </div>
                
                <button className={style.btn}>LogIn</button>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const PageLogin = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={style.box}>
            <h1 className={style.title}>Log In</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}




export default PageLogin;