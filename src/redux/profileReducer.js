const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        {post:'Hello Tom' , id:1, likesCount: 0},
        {post:'hi Tom How are you?' , id:2, likesCount: 0},
        {post:'hi Tom What do you do?' , id:3, likesCount: 0},
        {post:'hi Tom I am fine' , id:4, likesCount: 0},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            
            return {
                ...state,
                posts: [
                    ...state.posts, 
                    {
                        post: state.newPostText, 
                        id: 7, 
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            }

        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText,
            }

        default:
            return state;
    } 
}

export let addPostActionCreater = () => ({type: ADD_POST});
export let updateNewPostActionCreater = (text) => ({type: UPDATE_NEW_POST, newText: text});

export default profileReducer;