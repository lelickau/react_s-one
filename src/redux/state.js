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

    addMessage() {
        let newMessage = {
            message: this._state.pageDialogs.newMessageText, 
            id: 1, 
        };

        this._state.pageDialogs.messages.push(newMessage);
        this._state.pageDialogs.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessage(newMessage) {

        this._state.pageDialogs.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    //
    addPost() {
        let newPost = {
            post: this._state.pageProfile.newPostText, 
            id: 1, 
            likesCount: 0,
        };

        this._state.pageProfile.posts.push(newPost);
        this._state.pageProfile.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPost(newText) {

        this._state.pageProfile.newPostText = newText;
        this._callSubscriber(this._state);
    },
}

export default store;