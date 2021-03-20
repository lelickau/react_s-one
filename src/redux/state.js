let rendedEntireThree = () => {}

export const subscribe = (observer) => {
    rendedEntireThree = observer;
}

let state = {
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
    
}

export const addMessage = () => {
    let newMessage = {
        message: state.pageDialogs.newMessageText, 
        id: 1, 
    };

    state.pageDialogs.messages.push(newMessage);
    state.pageDialogs.newMessageText = '';
    rendedEntireThree(state);
}

export const updateNewMessage = (newMessage) => {

    state.pageDialogs.newMessageText = newMessage;
    rendedEntireThree(state);
}

//

export const addPost = () => {
    let newPost = {
        post: state.pageProfile.newPostText, 
        id: 1, 
        likesCount: 0,
    };

    state.pageProfile.posts.push(newPost);
    state.pageProfile.newPostText = '';
    rendedEntireThree(state);
}

export const updateNewPost = (newText) => {

    state.pageProfile.newPostText = newText;
    rendedEntireThree(state);
}

export default state;