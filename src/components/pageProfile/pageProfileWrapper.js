import React from 'react';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class PageProfileWrapper extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = this.props.autarizeuserId;
			if(!userId){
				this.props.history.push('/login')
			}
		}
		//console.log(this.props);
		this.props.setProfile(userId);
		this.props.getStatus(userId);
	}
	componentDidMount(){
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

	render() {
		//console.log(props.isAuth);
		return (
			<PageProfile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.pageProfile.profile,
	status: state.pageProfile.status,
	autarizeuserId: state.auth.userId,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, {setProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	//withAuthRedirect
)(PageProfileWrapper);




