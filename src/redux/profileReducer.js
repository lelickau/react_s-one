const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts: [
        {post:'Hello Tom' , id:1, likesCount: 25},
        {post:'hi Tom How are you?' , id:2, likesCount: 120},
        {post:'hi Tom What do you do?' , id:3, likesCount: 500},
        {post:'hi Tom I am fine' , id:4, likesCount: 333},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                post: state.newPostText, 
                id: 1, 
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    } 
}

export let addPostActionCreater = () => ({type: ADD_POST});
export let updateNewPostActionCreater = (text) => ({type: UPDATE_NEW_POST, newText: text});

export default profileReducer;