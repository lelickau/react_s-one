import React from 'react';
import avatar from './avatar.jpg';
import style from './post.module.css';

const Post = (props) => {
    return (
        <div className={style.post__box}>
            <div className={style.avatar__box}>
                <img alt='avatar' src={avatar}/>
            </div>
            <p>{props.text}</p>
            <div className={style.like}>
                &#10084;
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;