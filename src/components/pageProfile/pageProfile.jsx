import React from 'react';
import Banner from './banner/banner';
import Profile from './profile/profile';
import Posts from './posts/posts';
import Post from './post/post';

// let posts = [
// 	{post:'Hello Tom' , id:1, likesCount: 25},
// 	{post:'hi Tom How are you?' , id:2, likesCount: 120},
// 	{post:'hi Tom What do you do?' , id:3, likesCount: 500},
// 	{post:'hi Tom I am fine' , id:4, likesCount: 333},
// ];

const PageProfile = (props) => {
	console.log(props);
	let postsItoms = props.posts.map(p => <Post text={p.post} like={p.likesCount}/>);

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