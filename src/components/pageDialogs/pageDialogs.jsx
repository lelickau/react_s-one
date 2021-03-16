import React from 'react';
import style from './pageDialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';

const PageDialogs = (props) => {
    console.log(props);

    let dialogsElement = props.state.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElement = props.state.messages
        .map( m => <Message text={m.message}/> );

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs__box}>
                {dialogsElement}
                
            </div>
            <div className={style.messages__box}>
                {messagesElement}
                
            </div>
        </div>
    )
}


export default PageDialogs;