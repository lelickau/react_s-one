import React from 'react';
import style from './pageUsers.module.css';
import avatar from './avatar.jpg';
import { NavLink } from 'react-router-dom';

let User = ({user, followingIsProgress, setFollow, setUnfollow}) => {
    return (
        <div className={style.users__wrapper}>
            <div className={style.users__wrapper}>
                <div className={style.user}>
                    <div className={style.active__box}>
                        <div className={style.avatar__box}>
                        <NavLink to={'/pageProfile/' + user.id}>
                            <img 
                                alt='avatar' 
                                src={user.photos.small != null ? user.photos.small : avatar} 
                                className={style.avatar}/>
                        </NavLink>
                        </div>
                        {
                            user.followed ? 
                            <button 
                                disabled={followingIsProgress.some(id => id === user.id)} 
                                onClick={()=>{setFollow(user.id);}} 
                                className={style.btn}>
                            Unfollow</button> 
                            : 
                            <button 
                                disabled={followingIsProgress.some(id => id === user.id)} 
                                onClick={()=>{
                                setUnfollow(user.id);}} 
                                className={style.btn__active}>
                            Follow</button>
                        }
                    </div>
                    <div className={style.info__box}>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.about}</p>
                        </div>
                        <div>
                            <p>{user.country}</p>
                            <p>{user.city}</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        )
    }

export default User;