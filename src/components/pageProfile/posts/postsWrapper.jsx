import { connect } from 'react-redux';
import {addPostActionCreater, updateNewPostActionCreater} from '../../../redux/profileReducer';
import Posts from './posts';


let mapStateToProps = (state) => {
	return {
		posts: state.pageProfile,
		newPostText: state.pageProfile.newPostText,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPosts: (text) => {
			dispatch(updateNewPostActionCreater(text));
		},
		addPost: () => {
			dispatch(addPostActionCreater());
		},
	}
}
const PostsWrapper = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsWrapper;