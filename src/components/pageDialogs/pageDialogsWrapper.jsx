import React from 'react';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext';
import PageDialogs from './pageDialogs';

const PageDialogsWrapper = (props) => {
    //console.log(props);

    return (
        <>
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let pageDialogs = state.pageDialogs;

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreater());
                    }
                    let onMessageChange = (message) => {
                        store.dispatch(updateNewMessageActionCreater(message));
	                }
                    return (
                        <PageDialogs
                            updateNewMessage={onMessageChange}
                            addMessage={addMessage}
                            state={pageDialogs}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
            
        </>
    )
}


export default PageDialogsWrapper;