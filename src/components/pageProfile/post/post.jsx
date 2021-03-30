import React from 'react';
import avatar from './avatar.jpg';
import style from './post.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Post = (props) => {
    return (
        <div className={style.post__box}>
            <div className={style.avatar__box}>
                <img alt='avatar' src={avatar}/>
            </div>
            <p>{props.text}</p>
            <div className={style.like}>
                <FontAwesomeIcon icon='heart'/>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;