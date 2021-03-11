import React from 'react';
import style from'./posts.module.css';

const Posts = () => {
	return (
		<div className={style.posts}>
						<form>
							<label>
								<h3>My posts</h3>
								<input className={style.input__post} type="text" name="post" placeholder='your nows'/>
							</label>
							<button className={style.btn__post}>Send</button>
						</form>
					</div>
	)
}

export default Posts;