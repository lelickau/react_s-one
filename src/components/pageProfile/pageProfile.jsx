import React from 'react';
import Banner from './banner/banner';
import Profile from './profile/profile';
import PostsWrapper from './posts/postsWrapper';



const PageProfile = (props) => {
	console.log(props);

    return (
        <div>
			<Banner/>
			<Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<PostsWrapper/>
		</div>
    )
}

export default PageProfile;