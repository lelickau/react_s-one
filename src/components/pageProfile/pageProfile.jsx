import React from 'react';
import Banner from './banner/banner';
import Profile from './profile/profile';
import Posts from './posts/posts';
import Post from './post/post';


const PageProfile = (props) => {
	console.log(props);
	let postsItoms = props.posts.posts.map(p => <Post text={p.post} like={p.likesCount}/>);

    return (
        <div>
			<Banner/>
			<Profile/>
			<Posts/>
			{postsItoms}
		</div>
    )
}

export default PageProfile;