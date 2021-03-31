import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (text) => {
    dispatch(addMessage(text));
  },
});
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
