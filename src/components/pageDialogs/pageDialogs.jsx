import React from 'react';
import style from './pageDialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';

const PageDialogs = (props) => {
    console.log(props);
    // let dialogs = [
    //     {name:'Tommi' , id:1},
    //     {name:'Nikoly' , id:2},
    //     {name:'Rihana' , id:3},
    //     {name:'Megan' , id:4},
    //     {name:'Nikoly' , id:5},
    // ];

    let dialogsElement = props.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/> );

    // let messages = [
    //     {message:'hi Tom' , id:1},
    //     {message:'hi Tom How are you?' , id:2},
    //     {message:'hi Tom What do you do?' , id:3},
    //     {message:'hi Tom I am fine' , id:4},
    // ];

    let messagesElement = props.messages
        .map( m => <Message text={m.message}/> );

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs__box}>
                {dialogsElement}
                
            </div>
            <div className={style.messages__box}>
                {messagesElement}
                
            </div>
        </div>
    )
}


export default PageDialogs;