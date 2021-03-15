import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './dialogItem.module.css';

const DialogItem = (props) => {
    let path = '/pageDialogs/' + props.id;
    return (
        <NavLink to={path} className={style.dialog__item}>{props.name}</NavLink>
    )
}

export default DialogItem;