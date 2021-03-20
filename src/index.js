import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPost} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewMessage} from './redux/state';


let rendedEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App 
                state={state} 
                addPost={addPost}
                updateNewPost={updateNewPost}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}
                />
        </React.StrictMode>,
    document.getElementById('root')
    );
}
rendedEntireThree(state);
subscribe(rendedEntireThree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
