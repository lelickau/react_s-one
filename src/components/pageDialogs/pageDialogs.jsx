import React from 'react';
import style from './pageDialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';

const PageDialogs = (props) => {
    //console.log(props);

    let dialogsElement = props.state.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElement = props.state.messages
        .map( m => <Message text={m.message}/> );

    let newMessageItem = React.createRef();

    let addMessage = (e) => {
        e.preventDefault();
        props.addMessage();
    }
    let onMessageChange = () => {
		let message = newMessageItem.current.value;
		props.updateNewMessage(message);
	}

    return (
        <>
        <div className={style.wrapper}>
            <div className={style.dialogs__box}>
                {dialogsElement}
                
            </div>
            <div className={style.messages__box}>
                {messagesElement}
                <form className={style.form}>
                    <label>
                        <h3>Text..</h3>
                        <input 
                            ref={newMessageItem} 
                            className={style.input__post} 
                            type="text" 
                            name="post" 
                            placeholder='your message'
                            value={props.state.newMessageText}
                            onChange={onMessageChange}
                            />
                    </label>
                    <button onClick={addMessage} className={style.btn__post}>Add</button>
                </form>
            </div>
        </div>
        </>
    )
}


export default PageDialogs;