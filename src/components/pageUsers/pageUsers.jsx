import React from 'react';
import style from './pageUsers.module.css';
import UserItem from './userItem/userItem';


const PageUsers = (props) => {
    console.log(props);
    if (props.users.length === 0) {
        props.setUsers( [
                {
                    id: 0,
                    name: 'Kollya',
                    about: 'I love my family',
                    country: 'Russian',
                    city: 'Moscow',
                    avatar: '',
                    follow: false,
                },
                {
                    id: 1,
                    name: 'Katy',
                    about: 'I am human',
                    country: 'USA',
                    city: 'LA',
                    avatar: '',
                    follow: true,
                },
                {
                    id: 2,
                    name: 'Monila',
                    about: 'I love dogs',
                    country: 'Ukrain',
                    city: 'Kiev',
                    avatar: '',
                    follow: false,
                },
            ]
        )
    }

    let userItoms = props.users
            .map( user => 
            <UserItem 
                name={user.name} 
                key={user.id} 
                about={user.about} 
                country={user.country} 
                city={user.city} 
                follow={user.follow}
                button={user.follow ? <button onClick={()=>{props.unfollow(user.id)}} className={style.btn}>Unfollow</button> : <button onClick={()=>{props.follow(user.id)}} className={style.btn}>Follow</button>}
                />);


    return (
        <div className={style.users__wrapper}>
            {userItoms}
        </div>
    )
}

export default PageUsers;