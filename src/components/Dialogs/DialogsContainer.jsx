import {addMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (text) => {
            dispatch(addMessage(text));
        }
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs)


