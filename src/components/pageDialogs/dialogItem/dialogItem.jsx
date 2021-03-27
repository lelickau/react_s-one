import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './dialogItem.module.css';
import avatar from './avatar.jpg';

const DialogItem = (props) => {
    let path = '/pageDialogs/' + props.id;
    return (
        <div className={style.box}>
        <div className={style.avatar__box}><img alt='avatar' src={avatar}/></div>
        <NavLink to={path} className={style.dialog__item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;