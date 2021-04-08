const ADD_MESSAGE = 'ADD-MESSAGE';

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
    
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        message: action.messageBody, 
                        id: 7, 
                    },
                
                ],
            }

        default:
            return state;
    }
}

export let addMessageActionCreater = (messageBody) => ({type: ADD_MESSAGE, messageBody});


export default dialogsReducer;