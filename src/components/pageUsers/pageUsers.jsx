import React from 'react';
import style from './pageUsers.module.css';
import avatar from './avatar.jpg';
import { NavLink } from 'react-router-dom';

let PageUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
    return <div>

            {
            props.users.map( user => 
            <div className={style.users__wrapper}>
                <div className={style.users__wrapper}>
                    <div className={style.user}>
                        <div className={style.active__box}>
                            <div className={style.avatar__box}>
                            <NavLink to={'/pageProfile/' + user.id}>
                                <img alt='avatar' src={user.photos.small != null ? user.photos.small : avatar} className={style.avatar}/>
                            </NavLink>
                            </div>
                            {user.followed ? <button onClick={()=>{props.unfollow(user.id)}} className={style.btn}>Unfollow</button> : <button onClick={()=>{props.follow(user.id)}} className={style.btn__active}>Follow</button>}
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
            
            
        )}
        <div className={style.pagination__box}>
                {pages.map(page => {
                    return (<span className={`${props.currentPage === page && style.active__page} ${style.pagination}`} onClick={(e) => {props.onPageChanged(page);}} >{page}</span>)
                })}
            </div>
        </div>
        
}

export default PageUsers;