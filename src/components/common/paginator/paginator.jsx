import React, {useState} from 'react';
import style from './paginator.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.pagination__box}>
        { portionNumber > 1 &&
        <button className={style.arrow} onClick={() => { setPortionNumber(portionNumber - 1) }}>
        <FontAwesomeIcon icon='arrow-left'/>
        </button> }
        {pages
            .filter(page => page >= leftPortionPageNumber && page<=rightPortionPageNumber)
            .map((page) => {
                return <span className={`${currentPage === page && style.active__page} ${style.pagination}`}
                            key={page}
                            onClick={(e) => { onPageChanged(page); }}>{page}</span>
            })}

            { portionCount > portionNumber &&
            <button className={style.arrow} onClick={() => { setPortionNumber(portionNumber + 1) }}>
            <FontAwesomeIcon icon='arrow-right'/>
            </button> }
            </div>
        )
        
}

export default Paginator;