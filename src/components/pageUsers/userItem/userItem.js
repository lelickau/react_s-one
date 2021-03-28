import React from 'react';
import style from './userItem.module.css';
import avatar from './avatar.jpg';

const UserItem = (props) => {
    console.log(props);
    return (
        <div className={style.users__wrapper}>
            <div className={style.user}>
                <div className={style.active__box}>
                    <div className={style.avatar__box}>
                        <img alt='avatar' src={avatar} className={style.avatar}/>
                    </div>
                    {props.button}
                </div>
                <div className={style.info__box}>
                    <div>
                        <p>{props.name}</p>
                        <p>{props.about}</p>
                    </div>
                    <div>
                        <p>{props.country}</p>
                        <p>{props.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;