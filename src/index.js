import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rendedEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App 
                state={state} 
                addPost={store.addPost.bind(store)}
                updateNewPost={store.updateNewPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
                />
        </React.StrictMode>,
    document.getElementById('root')
    );
}
rendedEntireThree(store.getState());
store.subscribe(rendedEntireThree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
