import React from 'react';
import Banner from './banner/banner';
import Profile from './profile/profile';
import Posts from './posts/posts';
import Post from './post/post';

const PageProfile = () => {
    return (
        <div>
			<Banner/>
			<Profile/>
			<Posts/>
			<Post text="Hello Tom" like="15"/>
			<Post text="How are you?" like="25"/>
		</div>
    )
}

export default PageProfile;