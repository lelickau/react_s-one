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
				<Route path="/pageProfile" render={ () => <PageProfile posts={props.state.pageProfile}/>}/>
				<Route path="/pageDialogs" render={ () => <PageDialogs state={props.state.pageDialogs}/>}/>
				<Route path="/pageMusic" render={ () => <PageMusic/>}/>
				<Route path="/pageNews" render={ () => <PageNews/>}/>
				<Route path="/pageSettings" render={ () => <PageSettings/>}/>
			</main>
			
		</div>
		</BrowserRouter>
	);
}

export default App;
