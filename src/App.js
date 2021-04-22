import React, {Component} from 'react';
import './components/FortawesomeIcons';
import './App.css';
import HeaderWrapper from './components/header/headerWrapper';
import PageProfileWrapper from './components/pageProfile/pageProfileWrapper';
import { Route} from 'react-router-dom';
import PageDialogsWrapper from './components/pageDialogs/pageDialogsWrapper';
import NavBarWrapper from './components/navBar/navBarWrapper';
import UsersWrapper from './components/pageUsers/usersWrapper';
import PageLogin from './components/pageLogin/pageLogin';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
//import PageMusic from './components/pageMusic/pageMusic';
//import PageNews from './components/pageNews/pageNews';
//import PageSettings from './components/pageSettings/pageSettings';
const PageMusic = React.lazy(() => import('./components/pageMusic/pageMusic'));
const PageNews = React.lazy(() => import('./components/pageNews/pageNews'));
const PageSettings = React.lazy(() => import('./components/pageSettings/pageSettings'));

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
						<Route path="/pageMusic" render={withSuspense(PageMusic)}/>
						<Route path="/pageNews" render={withSuspense(PageNews)}/>
						<Route path="/pageUsers" render={ () => <UsersWrapper/>}/>
						<Route path="/pageSettings" render={withSuspense(PageSettings)}/>
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

let AppWrapper = compose(
	connect(mapStateToProps, {initializeApp}),withRouter
	)(App);

const MainApp = (props) => {
	return (
		<BrowserRouter>
            <Provider store={store}>
                <AppWrapper />
            </Provider>
        </BrowserRouter>
	)
}

export default MainApp;
