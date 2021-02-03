import { connect } from 'react-redux';
import UserMenu from '../pages/UserMenu/index';

const mapStateToProps = state => ({
    user: state.user.active,
  });
  
const mapDispatchToProps = (dispatch, ownProps) => ({
  // createUser: data => createUser({ dispatch, data }),
  // login: data => login({ dispatch, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
