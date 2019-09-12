import { connect } from 'react-redux';
import Login from '../pages/Login/index';
import { createUser } from '../actions/user';
import { login, clearError, logOut } from '../actions/auth';

const mapStateToProps = state => ({
  events: state.event,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser: data => createUser({ dispatch, data }),
  login: data => login({ dispatch, data }),
  clearError: () => clearError({ dispatch }),
  logOut: () => logOut({ dispatch }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
