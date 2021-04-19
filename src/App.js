import React, {Component} from 'react';
import './components/FortawesomeIcons';
import './App.css';
import HeaderWrapper from './components/header/headerWrapper';
import PageProfileWrapper from './components/pageProfile/pageProfileWrapper';
import { Route} from 'react-router-dom';
import PageMusic from './components/pageMusic/pageMusic';
import PageNews from './components/pageNews/pageNews';
import PageSettings from './components/pageSettings/pageSettings';
import PageDialogsWrapper from './components/pageDialogs/pageDialogsWrapper';
import NavBarWrapper from './components/navBar/navBarWrapper';
import UsersWrapper from './components/pageUsers/usersWrapper';
import PageLogin from './components/pageLogin/pageLogin';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render(){
		if(!this.props.initialized) {
			return <Preloader/>
		}
		return (
			
			<div className="container">
				<HeaderWrapper/>
				<main className="main">
				<NavBarWrapper/>
					<div className="content__box">
						<Route path="/pageProfile/:userId?" render={ () => <PageProfileWrapper />}/>
						<Route path="/pageDialogs" render={ () => <PageDialogsWrapper/>}/>
						<Route path="/pageMusic" render={ () => <PageMusic/>}/>
						<Route path="/pageNews" render={ () => <PageNews/>}/>
						<Route path="/pageUsers" render={ () => <UsersWrapper/>}/>
						<Route path="/pageSettings" render={ () => <PageSettings/>}/>
						<Route path="/login" render={ () => <PageLogin/>}/>
					</div>
				</main>
			</div>
			
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

export default compose(
	connect(mapStateToProps, {initializeApp}),withRouter
	)(App);
