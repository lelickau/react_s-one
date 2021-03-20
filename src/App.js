import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import PageDialogs from './components/pageDialogs/pageDialogs';
import PageProfile from './components/pageProfile/pageProfile';
import {BrowserRouter, Route} from 'react-router-dom';
import PageMusic from './components/pageMusic/pageMusic';
import PageNews from './components/pageNews/pageNews';
import PageSettings from './components/pageSettings/pageSettings';



const App = (props) => {
	console.log(props);
	return (
		<BrowserRouter>
		<div className="container">
			<Header/>
			<main className="main">
				<NavBar link={props.state.navBarList}/>
				<div className="content__box">
					<Route path="/pageProfile" 
						render={ () => <PageProfile 
							posts={props.state.pageProfile} 
							addPost={props.addPost}
							newPostText={props.state.pageProfile.newPostText}
							updateNewPost={props.updateNewPost}
							/>}/>
					<Route path="/pageDialogs" 
						render={ () => <PageDialogs 
							state={props.state.pageDialogs}
							addMessage={props.addMessage}
							updateNewMessage={props.updateNewMessage}
							/>}/>
					<Route path="/pageMusic" render={ () => <PageMusic/>}/>
					<Route path="/pageNews" render={ () => <PageNews/>}/>
					<Route path="/pageSettings" render={ () => <PageSettings/>}/>
				</div>
			</main>
			
		</div>
		</BrowserRouter>
	);
}

export default App;
