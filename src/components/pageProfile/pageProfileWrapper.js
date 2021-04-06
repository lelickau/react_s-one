import React from 'react';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setProfile, getStatus, updateStatus} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class PageProfileWrapper extends React.Component {
	
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 16218;
		}
		//console.log(this.props);
		this.props.setProfile(userId);
		this.props.getStatus(userId);
        
	}

	render() {
		//console.log(props.isAuth);
		return (
			<PageProfile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.pageProfile.profile,
	status: state.pageProfile.status,
});

export default compose(
	connect(mapStateToProps, {setProfile, getStatus, updateStatus}),
	withRouter,
	//withAuthRedirect
)(PageProfileWrapper);




