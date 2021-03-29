import * as axios from 'axios';
import React from 'react';
import style from './pageUsers.module.css';
import avatar from './avatar.jpg';

class PageUsers extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render(){
        return (
            this.props.users.map( user => 
            <div className={style.users__wrapper}>
                <div className={style.users__wrapper}>
                    <div className={style.user}>
                        <div className={style.active__box}>
                            <div className={style.avatar__box}>
                                <img alt='avatar' src={user.photos.small != null ? user.photos.small : avatar} className={style.avatar}/>
                            </div>
                            {user.followed ? <button onClick={()=>{this.props.unfollow(user.id)}} className={style.btn}>Unfollow</button> : <button onClick={()=>{this.props.follow(user.id)}} className={style.btn}>Follow</button>}
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
        ))}
}

export default PageUsers;