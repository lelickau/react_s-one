const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messages: [
        {message:'hi Tom' , id:1},
        {message:'hi Tom How are you?' , id:2},
        {message:'hi Tom What do you do?' , id:3},
        {message:'hi Tom I am fine' , id:4},
    ],
    
    dialogs: [
        {name:'Tommi' , id:1},
        {name:'Nikoly' , id:2},
        {name:'Rihana' , id:3},
        {name:'Megan' , id:4},
        {name:'Nikoly' , id:5},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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