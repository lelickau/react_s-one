import { connect } from 'react-redux';
import { compose } from 'redux';
import {addMessageActionCreater} from '../../redux/dialogsReducer';
import PageDialogs from './pageDialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    //console.log(state);
    return {
        state: state.pageDialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageBody) => {
            dispatch(addMessageActionCreater(messageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(PageDialogs);
