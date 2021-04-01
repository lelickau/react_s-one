import React from 'react';
import * as axios from 'axios';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router';


class PageProfileWrapper extends React.Component {
	
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = 2;
		}
		console.log(userId);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
	}

	render() {
		return (
			<PageProfile {...this.props} profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.pageProfile.profile,
});

let WithUrlDataPageProfileWrapper = withRouter(PageProfileWrapper);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataPageProfileWrapper);