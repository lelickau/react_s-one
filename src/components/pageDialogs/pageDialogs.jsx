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
                    name="message" 
                    placeholder='your message'
                    
                />
            </label>
            <button className={style.btn__post}>Add</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialogMessage'})(DialogForm);

const PageDialogs = (props) => {
    //console.log(props);

    let dialogsElement = props.state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );

    let messagesElement = props.state.messages
        .map( m => <Message text={m.message} key={m.id}/> );

    let newMessageItem = React.createRef();

    // let addMessage = (e) => {
    //     e.preventDefault();
    //     props.addMessage();
    // }
    // let onMessageChange = () => {
	// 	let message = newMessageItem.current.value;
	// 	props.updateNewMessage(message);
	// }
    //console.log(props.isAuth);
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <>
        <div className={style.wrapper}>
            <div className={style.dialogs__box}>
                {dialogsElement}
                
            </div>
            <div className={style.messages__box}>
                {messagesElement}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
        </>
    )
}


export default PageDialogs;