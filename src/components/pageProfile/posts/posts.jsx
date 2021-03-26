import React from 'react';
import style from'./posts.module.css';
import Post from '../post/post';


const Posts = (props) => {
	//console.log(props);
	let postsItoms = props.posts.posts.map(p => <Post text={p.post} like={p.likesCount}/>);
	let newPostElement = React.createRef();

	let addPost = (e) => {
		e.preventDefault();
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPosts(text);
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
						{postsItoms}
					</div>
	)
}

export default Posts;