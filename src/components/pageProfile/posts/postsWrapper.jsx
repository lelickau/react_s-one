import { connect } from 'react-redux';
import {addPostActionCreater} from '../../../redux/profileReducer';
import Posts from './posts';


let mapStateToProps = (state) => {
	return {
		posts: state.pageProfile,
		newPostText: state.pageProfile.newPostText,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPostActionCreater(newPostText));
		},
	}
}
const PostsWrapper = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsWrapper;