import React from 'react';
import * as axios from 'axios';
import PageProfile from './pageProfile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';


class PageProfileWrapper extends React.Component {
	
	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
})

export default connect(mapStateToProps, {setUserProfile})(PageProfileWrapper);