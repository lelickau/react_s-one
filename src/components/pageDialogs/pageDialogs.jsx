import React from 'react';
import style from './pageDialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import { Field, reduxForm } from 'redux-form';


const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <label>
                <h3>Text..</h3>
                <Field 
                    component={'input'}
                    className={style.input__post} 
                    name="messageBody" 
                    placeholder='your message'
                    
                />
            </label>
            <button className={style.btn__post}>Add</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialogMessage'})(DialogForm);

const PageDialogs = (props) => {
    console.log(props);

    let dialogsElement = props.state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );

    let messagesElement = props.state.messages
        .map( m => <Message text={m.message} key={m.id}/> );

    

    
    //console.log(props.isAuth);
    const addNewMessage = (value) => {
        console.log(value.messageBody);
        props.addMessage(value.messageBody);
    }

    return (
        <>
        <div className={style.wrapper}>
            <div className={style.dialogs__box}>
                {dialogsElement}
                
            </div>
            <div className={style.messages__box}>
                {messagesElement}
                <DialogReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
        </>
    )
}


export default PageDialogs;