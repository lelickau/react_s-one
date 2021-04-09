import React from 'react';
import style from './formsCustomize.module.css';

const FormCustomize = ({input, meta, child, ...props}) => {
    console.log(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.input__post} ${style.input} ${style.form__customize} ${(hasError ? style.error : '')}`}>
            {props.children}
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
