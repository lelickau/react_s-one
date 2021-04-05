import React from 'react';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setProfile} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class PageProfileWrapper extends React.Component {
	
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 2;
		}
		//console.log(this.props);
		this.props.setProfile(userId);
        
	}

	render() {
		//console.log(props.isAuth);
		return (
			<PageProfile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.pageProfile.profile,
	
});

export default compose(
	connect(mapStateToProps, {setProfile}),
	withRouter,
	//withAuthRedirect
)(PageProfileWrapper);




