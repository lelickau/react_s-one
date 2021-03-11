import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Banner from './components/banner/banner';
import Profile from './components/profile/profile';
import Posts from './components/posts/posts';
import Post from './components/posts/post/post';


const App = () => {
	return (
		<div className="container">
			<Header/>
			<main className="main">
				<NavBar/>
				<div>
					<Banner/>
					<Profile/>
					<Posts/>
					<Post text="Hello Tom" like="15"/>
					<Post text="How are you?" like="25"/>
				</div>
			</main>
		</div>
	);
}

export default App;
