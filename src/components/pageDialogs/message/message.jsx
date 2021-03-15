import React from 'react';
import style from './message.module.css';


const Message = (props) => {
    return (
        <div className={style.message__item}>{props.text}</div>
    )
}

export default Message;