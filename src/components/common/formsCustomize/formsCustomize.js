import React from 'react';
import style from './formsCustomize.module.css';
import { Field } from 'redux-form';

const FormCustomize = ({input, meta:{touched, error}, children}) => {
    //console.log(props);
    const hasError = touched && error;
    return (
        <div className={`${style.input__post} ${style.input} ${style.form__customize} ${(hasError ? style.error : '')}`}>
            {children}
            {hasError && <span className={`${style.form__customize} ${style.error}`}>error</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormCustomize {...props} >
            <textarea {...restProps} {...input} />
        </FormCustomize>
    )
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormCustomize {...props}>
            <input {...restProps} {...input} />
        </FormCustomize>
    )
}

export const CreateField = (placeholder, name, validate, component, type, props) => {
    return(
        <div>
        <Field placeholder={placeholder} name={name} validate={validate} component={component} type={type} {...props}/>
    </div>
    )
}
