import { connect } from 'react-redux';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/dialogsReducer';
import PageDialogs from './pageDialogs';


let mapStateToProps = (state) => {
    //console.log(state);
    return {
        state: state.pageDialogs,
        isAuth: state.auth.isAuth,
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
const PageDialogsWrapper = connect(mapStateToProps, mapDispatchToProps)(PageDialogs);

export default PageDialogsWrapper;