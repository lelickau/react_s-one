import React from 'react';
import style from'./posts.module.css';
import {addPostActionCreater, updateNewPostActionCreater} from '../../../redux/profileReducer';


const Posts = (props) => {
	console.log(props);
	let newPostElement = React.createRef();

	let addPost = (e) => {
		e.preventDefault();
		props.dispatch(addPostActionCreater());
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostActionCreater(text));
	}

	return (
		<div className={style.posts}>
						<form>
							<label>
								<h3>My posts</h3>
								<input onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={style.input__post} type="text" name="post" placeholder='your nows'/>
							</label>
							<button onClick={addPost} className={style.btn__post}>Send</button>
						</form>
					</div>
	)
}

export default Posts;