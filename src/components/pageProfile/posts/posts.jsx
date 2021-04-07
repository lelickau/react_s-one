import React from 'react';
import style from'./posts.module.css';
import Post from '../post/post';
import { Field, reduxForm } from 'redux-form';


const PostsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
		<label>
			<h3>My posts</h3>
			<Field component={'textarea'} className={style.input__post}  name={"post"} placeholder='your nows'/>
		</label>
		<button className={style.btn__post}>Send</button>
	</form>
	)
	
}

const PostReduxForm = reduxForm({form: 'posts'})(PostsForm);

const Posts = (props) => {
	//console.log(props);
	let postsItoms = props.posts.posts.map(p => <Post text={p.post} key={p.id} like={p.likesCount}/>);
	let newPostElement = React.createRef();

	// let addPost = (e) => {
	// 	e.preventDefault();
	// 	props.addPost();
	// };

	// let onPostChange = () => {
	// 	let text = newPostElement.current.value;
	// 	props.updateNewPosts(text);
	// }
	const onSubmit = (formData) => {
        console.log(formData);
    }

	return (
		<div className={style.posts}>
			<PostReduxForm onSubmit={onSubmit}/>
			{postsItoms}
		</div>
	)
}

export default Posts;