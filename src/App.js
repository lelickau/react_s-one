import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import PageProfile from './components/pageProfile/pageProfile';
import {BrowserRouter, Route} from 'react-router-dom';
import PageMusic from './components/pageMusic/pageMusic';
import PageNews from './components/pageNews/pageNews';
import PageSettings from './components/pageSettings/pageSettings';
import PageDialogsWrapper from './components/pageDialogs/pageDialogsWrapper';
import StoreContext from './storeContext';



const App = (props) => {
	//console.log(props);
	
	return (
		<BrowserRouter>
		<div className="container">
			<Header/>
			<main className="main">
			<StoreContext.Consumer>
			{
				(store) => <NavBar link={store.getState().navBarList}/>
			}
			</StoreContext.Consumer>
				
				<div className="content__box">
					<Route path="/pageProfile" 
						render={ () => 
						<PageProfile />}/>
					<Route path="/pageDialogs" 
						render={ () => 
						<PageDialogsWrapper/>}/>
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
