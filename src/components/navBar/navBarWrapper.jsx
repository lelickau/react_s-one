import { connect } from 'react-redux';
import NavBar from './navBar';


let mapStateToProps = (state) => {
	return {
		link: state.navBarList,
	}
}
const NavBarWrapper = connect(mapStateToProps)(NavBar);

export default NavBarWrapper;