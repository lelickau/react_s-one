import * as axios from 'axios';
import React from 'react';
import style from './pageUsers.module.css';
import avatar from './avatar.jpg';

class PageUsers extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        return <div>

            {
            this.props.users.map( user => 
            <div className={style.users__wrapper}>
                <div className={style.users__wrapper}>
                    <div className={style.user}>
                        <div className={style.active__box}>
                            <div className={style.avatar__box}>
                                <img alt='avatar' src={user.photos.small != null ? user.photos.small : avatar} className={style.avatar}/>
                            </div>
                            {user.followed ? <button onClick={()=>{this.props.unfollow(user.id)}} className={style.btn}>Unfollow</button> : <button onClick={()=>{this.props.follow(user.id)}} className={style.btn__active}>Follow</button>}
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
                    return (<span className={`${this.props.currentPage === page && style.active__page} ${style.pagination}`} onClick={(e) => {this.onPageChanged(page);}} >{page}</span>)
                })}
            </div>
        </div>
        }
}

export default PageUsers;