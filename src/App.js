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



const App = () => {
	return (
		<BrowserRouter>
		<div className="container">
			<Header/>
			<main className="main">
				<NavBar/>
				<Route path="/pageProfile" component={PageProfile}/>
				<Route path="/pageDialogs" component={PageDialogs}/>
				<Route path="/pageMusic" component={PageMusic}/>
				<Route path="/pageNews" component={PageNews}/>
				<Route path="/pageSettings" component={PageSettings}/>
			</main>
			
		</div>
		</BrowserRouter>
	);
}

export default App;
