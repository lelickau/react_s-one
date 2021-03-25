let initialState = 
    [
        {link: "Profile", href: "/pageProfile"},
        {link: "Messages", href: "/pageDialogs"},
        {link: "News", href: "/pageNews"},
        {link: "Music", href: "/pageMusic"},
        {link: "Settings", href: "/pageSettings"},
    ];

const navBarReducer = (state = initialState) => {
    return state;
}

export default navBarReducer;