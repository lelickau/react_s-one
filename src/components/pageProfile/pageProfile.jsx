import React from 'react';
import Banner from './banner/banner';
import Profile from './profile/profile';
import PostsWrapper from './posts/postsWrapper';



const PageProfile = ({profile, isOwner, status, updateStatus, savePhoto}) => {
	//console.log(props);

    return (
        <div>
			<Banner/>
			<Profile profile={profile} savePhoto={savePhoto} isOwner={isOwner} status={status} updateStatus={updateStatus}/>
			<PostsWrapper/>
		</div>
    )
}

export default PageProfile;