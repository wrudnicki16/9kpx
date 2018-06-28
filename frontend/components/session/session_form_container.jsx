import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import { clearErrors, signup, login } from '../../actions/session_actions';

let mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: processPath(ownProps.match.path),
    loggedIn: !!state.currentUser
  }
}

const processPath = (path) => {
  return path === "/login" ? "login" : "signup"
}

let mapDispatchToProps = (dispatch, ownProps) => {
  let path = ownProps.match.path;
  let formType = processPath(path);
  let processForm = formType === "login" ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(SessionForm));