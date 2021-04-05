import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/dialogsReducer';
import PageDialogs from './pageDialogs';


let mapStateToProps = (state) => {
    //console.log(state);
    return {
        state: state.pageDialogs,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (message) => {
            dispatch(updateNewMessageActionCreater(message));
        },
        addMessage: () => {
            dispatch(addMessageActionCreater());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(PageDialogs);
