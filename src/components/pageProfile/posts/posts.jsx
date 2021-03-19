import React from 'react';
import style from'./posts.module.css';


const Posts = (props) => {
	let newPostElement = React.createRef();

	let addPost = (e) => {
		e.preventDefault();
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};

	return (
		<div className={style.posts}>
						<form>
							<label>
								<h3>My posts</h3>
								<input ref={newPostElement} className={style.input__post} type="text" name="post" placeholder='your nows'/>
							</label>
							<button onClick={addPost} className={style.btn__post}>Send</button>
						</form>
					</div>
	)
}

export default Posts;