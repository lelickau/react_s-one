import React from 'react';
import style from './paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
    return (
        <div className={style.pagination__box}>
                {pages.map(page => {
                    return (<span className={`${currentPage === page && style.active__page} ${style.pagination}`} onClick={(e) => {onPageChanged(page);}} >{page}</span>)
                })}
            </div>
        )
        
}

export default Paginator;