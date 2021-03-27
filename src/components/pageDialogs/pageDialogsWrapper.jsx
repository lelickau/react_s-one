import { connect } from 'react-redux';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/dialogsReducer';
import PageDialogs from './pageDialogs';


let mapStateToProps = (state) => {
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
const PageDialogsWrapper = connect(mapStateToProps, mapDispatchToProps)(PageDialogs);

export default PageDialogsWrapper;