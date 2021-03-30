let initialState = 
    [
        {link: "Profile", href: "/pageProfile", id: 0, icon: 'user-circle',},
        {link: "Messages", href: "/pageDialogs", id: 1, icon: 'comments',},
        {link: "News", href: "/pageNews", id: 2, icon: 'newspaper',},
        {link: "Music", href: "/pageMusic", id: 3, icon: 'music',},
        {link: "Find Users", href: "/pageUsers", id: 5, icon: 'users',},
        {link: "Settings", href: "/pageSettings", id: 4, icon: 'cog',},
    ];

const navBarReducer = (state = initialState) => {
    return state;
}

export default navBarReducer;