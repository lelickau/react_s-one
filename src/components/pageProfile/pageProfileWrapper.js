import React from 'react';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router';


class PageProfileWrapper extends React.Component {
	
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 2;
		}
		console.log(this.props);
		this.props.setProfile(userId);
        
	}

	render() {
		//console.log(props.isAuth);
		if(!this.props.isAuth) return <Redirect to={'/login'} /> ;
		return (
			<PageProfile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.pageProfile.profile,
	isAuth: state.auth.isAuth,
});

let WithUrlDataPageProfileWrapper = withRouter(PageProfileWrapper);

export default connect(mapStateToProps, {setProfile})(WithUrlDataPageProfileWrapper);