const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
    _state: {
        pageProfile: {
            posts: [
                {post:'Hello Tom' , id:1, likesCount: 25},
                {post:'hi Tom How are you?' , id:2, likesCount: 120},
                {post:'hi Tom What do you do?' , id:3, likesCount: 500},
                {post:'hi Tom I am fine' , id:4, likesCount: 333},
            ],
            newPostText: '',
        },
        
        pageDialogs: {
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
        },

        navBarList: [
            {link: "Profile", href: "/pageProfile"},
            {link: "Messages", href: "/pageDialogs"},
            {link: "News", href: "/pageNews"},
            {link: "Music", href: "/pageMusic"},
            {link: "Settings", href: "/pageSettings"},
        ],
        
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.pageDialogs.newMessageText, 
                id: 1, 
            };
    
            this._state.pageDialogs.messages.push(newMessage);
            this._state.pageDialogs.newMessageText = '';
            this._callSubscriber(this._state);
        //
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.pageDialogs.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        //
        } else if (action.type === ADD_POST) {
            let newPost = {
                post: this._state.pageProfile.newPostText, 
                id: 1, 
                likesCount: 0,
            };
    
            this._state.pageProfile.posts.push(newPost);
            this._state.pageProfile.newPostText = '';
            this._callSubscriber(this._state);
        //
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.pageProfile.newPostText = action.newText;
            this._callSubscriber(this._state);
        //
        }
    },

}
export let addMessageActionCreater = () => ({type: ADD_MESSAGE});
export let updateNewMessageActionCreater = (message) => ({type: UPDATE_NEW_MESSAGE, newMessage: message});
export let addPostActionCreater = () => ({type: ADD_POST});
export let updateNewPostActionCreater = (text) => ({type: UPDATE_NEW_POST, newText: text});

export default store;