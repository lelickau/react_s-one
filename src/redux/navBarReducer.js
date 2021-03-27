let initialState = 
    [
        {link: "Profile", href: "/pageProfile", id: 0,},
        {link: "Messages", href: "/pageDialogs", id: 1,},
        {link: "News", href: "/pageNews", id: 2,},
        {link: "Music", href: "/pageMusic", id: 3,},
        {link: "Find Users", href: "/pageUsers", id: 5,},
        {link: "Settings", href: "/pageSettings", id: 4,},
    ];

const navBarReducer = (state = initialState) => {
    return state;
}

export default navBarReducer;