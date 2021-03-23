const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                message: state.newMessageText, 
                id: 1, 
            };
        
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE: 
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }
}

export let addMessageActionCreater = () => ({type: ADD_MESSAGE});
export let updateNewMessageActionCreater = (message) => ({type: UPDATE_NEW_MESSAGE, newMessage: message});

export default dialogsReducer;