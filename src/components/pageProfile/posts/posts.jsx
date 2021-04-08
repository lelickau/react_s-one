import React from 'react';
import style from'./posts.module.css';
import Post from '../post/post';
import { Field, reduxForm } from 'redux-form';
import {maxLenghtCreator, required} from '../../../utils/validators/valudators';

const maxLenght10 = maxLenghtCreator(10);
const PostsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
		<label>
			<h3>My posts</h3>
			<Field component={'textarea'} className={style.input__post}  name={"newPostText"} placeholder='your nows' validate={[required, maxLenght10]} />
		</label>
		<button className={style.btn__post}>Send</button>
	</form>
	)
	
}

const PostReduxForm = reduxForm({form: 'profilePosts'})(PostsForm);

const Posts = (props) => {
	//console.log(props);
	let postsItoms = props.posts.posts.map(p => <Post text={p.post} key={p.id} like={p.likesCount}/>);
	
	const addNewPost = (value) => {
        console.log(value.newPostText);
		props.addPost(value.newPostText);
    }

	return (
		<div className={style.posts}>
			<PostReduxForm onSubmit={addNewPost}/>
			{postsItoms}
		</div>
	)
}

export default Posts;