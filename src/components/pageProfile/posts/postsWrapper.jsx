import React from 'react';
import {addPostActionCreater, updateNewPostActionCreater} from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';
import Posts from './posts';


const PostsWrapper = (props) => {
	//console.log(props);
	

	return (
		<StoreContext.Consumer> 
		{(store) => {
			let state = store.getState();
			let posts = state.pageProfile;
			let newPostText = state.pageProfile.newPostText;
			let addPost = (e) => {
				store.dispatch(addPostActionCreater());
			};

			let onPostChange = (text) => {
				store.dispatch(updateNewPostActionCreater(text));
			}
			return <Posts
				posts={posts}
				updateNewPosts={onPostChange}
				addPost={addPost}
				newPostText={newPostText}
			/>
		}}
		</StoreContext.Consumer>
	)
}

export default PostsWrapper;