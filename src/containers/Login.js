import { connect } from 'react-redux';
import Login from '../pages/Login/index';
import { login, clearError, logOut, signUp } from '../actions/auth';

const mapStateToProps = state => ({
  events: state.event,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: data => signUp({ dispatch, data }),
  login: data => login({ dispatch, data }),
  clearError: () => clearError({ dispatch }),
  logOut: () => logOut({ dispatch }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
