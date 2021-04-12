import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import {setAuth, logout} from '../../redux/authReducer';


class HeaderWrapper extends React.Component {

	componentDidMount() {
		this.props.setAuth();
	}

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, {setAuth, logout})(HeaderWrapper);