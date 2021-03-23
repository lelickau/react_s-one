const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
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