import { connect } from 'react-redux';
import Nabvar from '../components/shared/NavBar';

const mapStateToProps = state => ({
  user: state.user.active,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // createUser: data => createUser({ dispatch, data }),
  // login: data => login({ dispatch, data }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nabvar);
